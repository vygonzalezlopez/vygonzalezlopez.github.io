/*
  === Controller: auth.controller.js ===
  Purpose:
    - Handles rendering of the login page.
    - Loads mock users from users.json for temporary login/testing.
*/

const { hashPassword } = require("../utils/password-hasher");

// === Load Users from API for Auth Page ===
// Purpose:
//   - Uses the /api/users endpoint to retrieve the user list from MongoDB.
//   - Feeds this into the login page so the temporary login dropdown is backed by the database.
const baseApiUrl = "http://localhost:3000/api";

const usersEndpoint = `${baseApiUrl}/users`;           // GET all users
const usernameEndpoint = `${baseApiUrl}/users`;        // will append /:username

const fetchOptions = {
  method: "GET",
  headers: {
    Accept: "application/json"
  }
};

//remove block of code after api is working!!!!!!!!!
//var fs = require('fs');                                  // Imports the built-in Node.js file system module
//var sampleUsers = JSON.parse(                            // Parses JSON text into a JavaScript object/array
    //fs.readFileSync('./data/users.json', 'utf8')); // sampleUsers now holds the array of inventory objects

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
exports.handleLogin = async (req, res) => {
  const { username, password } = req.body;

  // Basic presence check
  if (!username || !password) {
    return res.render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users,
      error: "Please enter both username and password."
    });
  }

  try {
    
    // Step 1: look up user via /api/users/:username
    const userRes = await fetch(
      `${usernameEndpoint}/${encodeURIComponent(username)}`,
      fetchOptions
    );

    if (userRes.status === 404) {
      return res.render("auth/login", {
        layout: "auth",
        title: "Login - Inventory Management System",
        users: [],
        error: "No account found. Please verify your username."
      });
    }

    if (!userRes.ok) {
      throw new Error(`API error: ${userRes.status}`);
    }

    // IMPORTANT: /api/users/:username returns an ARRAY, not a single object
    const data = await userRes.json();

    if (!Array.isArray(data) || data.length === 0) {
      return res.render("auth/login", {
        layout: "auth",
        title: "Login - Inventory Management System",
        users: [],
        error: "No account found. Please verify your username."
      });
    }

    const user = data[0]; 

    // Step 2: normalize + hash incoming password
    const cleanedPassword = password.trim();        // avoid trailing/leading-space issues
    const attemptedHash = hashPassword(cleanedPassword);

    // Step 3: compare with stored hash
    if (attemptedHash !== user.passwordHash) {
      return res.render("auth/login", {
        layout: "auth",
        title: "Login - Inventory Management System",
        users,
        error: "Incorrect password." 
      });
    }

    //  SUCCESS — later this is where session/role logic would live
    return res.redirect("/dashboard");
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).render("auth/login", {
      layout: "auth",
      title: "Login - Inventory Management System",
      users,
      error: "An error occurred while logging in."
    });
  }
};

/*
  === Action: login ===
  Purpose:
    - Handles GET "/" requests.
    - Calls /api/users to load the user list from the database.
    - Renders the login view using the "auth" layout (no header/footer).
    - Provides the users array for the temporary login dropdown.
*/


exports.login = async (req, res) => {
  const created = req.query.created === "1";

  await fetch(usersEndpoint, fetchOptions)
    .then(apiRes => apiRes.json())
    .then(json => {
      let message = null;

      if (!(json instanceof Array)) {
        message = "API lookup error";
        json = [];
      } else if (!json.length) {
        message = "No users exist in our database!";
      }

      res.render("auth/login", {
        layout: "auth",
        title: "Login - Inventory Management System",
        users: json,                                      // now from DB, not users.json
        success: created ? "Account created successfully. You can now log in." : null,
        message                                           // optional message for debugging/UX
      });
    })
    .catch(err => {
      console.error("Error loading users from API:", err);
      res.status(500).render("auth/login", {
        layout: "auth",
        title: "Login - Inventory Management System",
        users: [],
        error: "Error loading users from database."
      });
    });
};

