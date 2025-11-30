/*
  === Controller: auth.controller.js ===
  Purpose:
    - Handles rendering of the login page.
    - Loads mock users from users.json for temporary login/testing.
*/

const { hashPassword } = require("../utils/password-hasher");
const users = require("../../data/users.json");

// --- Primary login handler for username/password form ---
exports.handleLogin = (req, res) => {
  const { username, password } = req.body;

  // Basic presence check
  if (!username || !password) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: sampleUsers,
      error: "Please enter both username and password."
    });
  }

  // Step 1: find user in JSON by username
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: sampleUsers,
      error: "No account found. Please verify your username."
    });
  }

  // Step 2: hash incoming password
  const attemptedHash = hashPassword(password);

  // Step 3: compare with stored hash
  if (attemptedHash !== user.passwordHash) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: sampleUsers,
      error: "Incorrect password."
    });
  }

  // SUCCESS — later this is where session/role logic would live
  return res.redirect("/dashboard");
};

var fs = require('fs');                                  // Imports the built-in Node.js file system module
var sampleUsers = JSON.parse(                            // Parses JSON text into a JavaScript object/array
    fs.readFileSync('./data/users.json', 'utf8')); // sampleUsers now holds the array of inventory objects

/*
  === Action: login ===
  Purpose:
    - Handles GET "/" requests.
    - Renders the login view using the "auth" layout (no header/footer).
    - Passes the user list to the view for the temporary login dropdown.
*/
exports.login = (req, res) => {
  res.render("auth/login", {
    layout: "auth", // Use auth.hbs instead of main.hbs
    title: "Login - Inventory Management System",
    users: sampleUsers
  });
};
