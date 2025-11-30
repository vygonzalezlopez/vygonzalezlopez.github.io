/*
  === Controller: auth.controller.js ===
  Purpose:
    - Handles rendering of the login page.
    - Loads mock users from users.json for temporary login/testing.
*/

const { hashPassword } = require("../utils/password-hasher");
//const users = require("../../data/users.json");
var fs = require('fs');                                  // Imports the built-in Node.js file system module
var sampleUsers = JSON.parse(                            // Parses JSON text into a JavaScript object/array
    fs.readFileSync('./data/users.json', 'utf8')); // sampleUsers now holds the array of inventory objects

/*
  === Action: handleCreateAccount ===
  Purpose:
    - Handles POST "/" create-account requests from the modal.
    - Validates input, checks for duplicate username, hashes the password,
      and appends the new user to users.json using the agreed structure.
*/
exports.handleCreateAccount = (req, res) => {
  const {
    firstname,
    lastname,
    username,
    password,
    role,
    securityAnswer
  } = req.body;

  const securityquestion = "What state were you born?";

  // Reload users from disk to ensure we have the latest version
  const raw = fs.readFileSync('./data/users.json', 'utf8');
  const currentUsers = JSON.parse(raw);

  // Basic presence check
  if (!firstname || !lastname || !username || !password || !role || !securityAnswer) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: currentUsers,
      error: "All fields are required to create an account."
    });
  }

  // Check if username already exists
  const existing = currentUsers.find(u => u.username === username);
  if (existing) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: currentUsers,
      error: "Username already exists. Please choose a different one."
    });
  }

  // Hash the password
  const passwordHash = hashPassword(password);

  // Build new user object with your exact structure
  const newUser = {
    firstname,
    lastname,
    username,
    password,
    role,
    securityquestion,
    securityAnswer,
    passwordHash
  };

  // Append and save
  currentUsers.push(newUser);
  fs.writeFileSync('./data/users.json', JSON.stringify(currentUsers, null, 4));

  // Keep sampleUsers in sync for dropdown usage
  sampleUsers = currentUsers;

  // Redirect back to "/" with a flag so we can show a success message
  return res.redirect("/?created=1");
};

// --- Primary login handler for username/password form ---
exports.handleLogin = (req, res) => {
  const { username, password } = req.body;

  // Reload users from disk so we always see newly created accounts
  const raw = fs.readFileSync('./data/users.json', 'utf8');
  const currentUsers = JSON.parse(raw);

  // Basic presence check
  if (!username || !password) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: currentUsers,
      error: "Please enter both username and password."
    });
  }

  // Step 1: find user in JSON by username
 
  const user = currentUsers.find(u => u.username === username);

  if (!user) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users: currentUsers,
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
      users: currentUsers,
      error: "Incorrect password."
    });
  }

  // SUCCESS — later this is where session/role logic would live
  return res.redirect("/dashboard");
};

/*
  === Action: login ===
  Purpose:
    - Handles GET "/" requests.
    - Renders the login view using the "auth" layout (no header/footer).
    - Passes the user list to the view for the temporary login dropdown.
*/
exports.login = (req, res) => {
  const created = req.query.created === "1";

  res.render("auth/login", {
    layout: "auth", // Use auth.hbs instead of main.hbs
    title: "Login - Inventory Management System",
    users: sampleUsers,
    success: created ? "Account created successfully. You can now log in." : null
  });
};

