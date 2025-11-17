/* 
  === Route File: index.js ===
  Purpose:
    - Defines the main application routes for page navigation.
    - Connects URL paths to controller logic or inline route handlers.
  
  Interactions:
    - Loaded in app.js via: app.use("/", indexRouter)
    - Uses inventory.controller.js for rendering main dashboard
    - Renders Handlebars templates such as index.hbs and placeholder.hbs
*/

const express = require("express");                         // Imports the Express framework
const router = express.Router();                             // Creates a new router instance for defining routes
const inventory = require("../controllers/inventory.controller"); // Imports the inventory controller for page rendering


/* 
  === Route: GET "/" ===
  Purpose:
    - Serves as the application's default landing page after login.
    - Delegates page rendering to inventory.index(), which delivers index.hbs.
  
  Interactions:
    - Called automatically when user visits localhost:3000/
    - inventory.index() prepares user + item data and calls res.render("index")
*/
router.get("/", inventory.index);                            // Maps the root URL to the index controller function


/* 
  === Route: GET "/placeholder" ===
  Purpose:
    - Renders a simple placeholder page for links such as social media icons.
    - Used during early development before implementing full pages.
  
  Interactions:
    - Renders placeholder.hbs view
    - Provides { title: "Placeholder" } to Handlebars template
*/
router.get("/placeholder", (req, res) => {                   // Defines a simple inline route handler for /placeholder
  res.render("placeholder", { title: "Placeholder" });       // Renders a placeholder view with a basic title parameter
});


/*
  === Export Router ===
  Purpose:
    - Makes this router available to app.js, where it becomes part of the main server.
  
  Interactions:
    - app.js imports this file and mounts it onto the "/" path
*/
module.exports = router;                                     // Exports router so app.js can use it
