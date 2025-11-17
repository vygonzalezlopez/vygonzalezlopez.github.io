/* 
  === Load Sample Inventory Data ===
  Purpose:
    - This block loads mock inventory data from a local JSON file.
    - Used during early development before a database or repository is implemented.
  
  Interactions:
    - Reads from /data/sample-items.json
    - Parsed data is later passed into the index.hbs view via res.render()
    - This simulates the "Model" portion of MVC until the DB layer is built.
*/
var fs = require('fs');                                  // Imports the built-in Node.js file system module
var sampleItems = JSON.parse(                            // Parses JSON text into a JavaScript object/array
    fs.readFileSync('./data/sample-items.json', 'utf8')); // sampleItems now holds the array of inventory objects

/* 
  === Controller: index() ===
  Purpose:
    - Handles GET requests for the root route ("/").
    - Prepares mock user + inventory data.
    - Renders the "index" Handlebars template as the main landing page after login.

  Interactions:
    - Called by router.get("/", inventory.index) in routes/index.js
    - Injects data into index.hbs
    - index.hbs is rendered inside the main layout (main.hbs), which includes header/footer partials
*/
exports.index = (req, res) => {                                   // Defines the exported controller method for GET /
  
  const user = { name: "Victor", role: "Inventory Clerk" };       // Creates a temporary mock user object (role used for UI logic)

  res.render("dashboard/index", {                                            // Renders the "index.hbs" view through Handlebars
    title: "Inventory Management System",                          // Page title injected into the layout's <title> tag
    user,                                                          // Sends the mock user object to the view for display
    roleMessage: "(dynamic messages will be displayed here)",      // Placeholder dynamic message area for future role-driven alerts
    items: sampleItems                                             // Sends parsed inventory data to index.hbs for table rendering
  });                                                              // End of render() call, page is delivered to front-end
};
