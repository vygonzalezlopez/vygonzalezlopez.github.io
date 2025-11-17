/*
  === Controller: auth.controller.js ===
  Purpose:
    - Handles rendering of the login page.
    - Loads mock users from users.json for temporary login/testing.
*/

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