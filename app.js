/* 
  === Application Entry Point: app.js ===
  Purpose:
    - Initializes and configures the Express server.
    - Registers Handlebars as the view engine.
    - Sets up middleware for logging, static files, body parsing, and routing.
    - Defines global 404 handling and starts the server.
  
  Interactions:
    - Renders Handlebars views from /app_server/views.
    - Loads routes from /app_server/routes/index.js.
    - Serves static assets (CSS, JS, images) from /public.
    - Used as the main file launched with `node app.js` or `npm start`.
*/

const path = require("path");                      // Node utility for working with file paths
const express = require("express");                // Express framework for routing and middleware
const morgan = require("morgan");                  // HTTP request logger for development
const { engine } = require("express-handlebars");  // Handlebars templating engine integration

// Database + API
require("./app_api/models/db");
const apiRouter = require("./app_api/routes/index");

const app = express();                             // Creates an Express application instance




/* 
  === View Engine Configuration (Handlebars) ===
  Purpose:
    - Registers Handlebars as the templating engine (.hbs files).
    - Defines locations for layouts and partials.
    - Sets the default layout to "main".
  
  Interactions:
    - Views rendered via res.render("viewName") automatically use main.hbs layout.
    - Header/footer partials load from /app_server/views/partials.
*/
app.engine("hbs", engine({
  extname: ".hbs",                                 // File extension for Handlebars templates
  defaultLayout: "main",                           // Main layout wrapper for all views
  layoutsDir: path.join(__dirname, "app_server", "views", "layouts"), // Layout directory path
  partialsDir: path.join(__dirname, "app_server", "views", "partials") // Partials directory path
}));
app.set("view engine", "hbs");                     // Enables Handlebars as the primary view engine
app.set("views", path.join(__dirname, "app_server", "views")); // View templates folder


/* 
  === Global Middleware Stack ===
  Purpose:
    - morgan: logs incoming HTTP requests during development.
    - express.urlencoded/json: parses form data and JSON bodies.
    - express.static: serves CSS, JS, and images from /public.
*/
app.use(morgan("dev"));                            // Logs requests to console (GET /, etc.)
app.use(express.urlencoded({ extended: true }));    // Parses form submissions
app.use(express.json());                           // Parses JSON request bodies
app.use(express.static(path.join(__dirname, "public"))); // Serves static files


/* 
  === Route Registration ===
  Purpose:
    - Attaches the main router to the root URL path.
  
  Interactions:
    - /app_server/routes/index.js defines GET "/" and GET "/placeholder".
*/
const indexRouter = require("./app_server/routes/index");
app.use("/", indexRouter);                         // Uses index router for all base routes
// API routes
app.use("/api", apiRouter);



/* 
  === 404 Not Found Handler ===
  Purpose:
    - Catches any route that does not match registered paths.
    - Renders custom 404 page (error.hbs).
*/
app.use((req, res) => 
  res.status(404).render("error", { title: "Not Found" }) // Displays simple not-found template
);


/* 
  === Server Startup ===
  Purpose:
    - Starts the Express server and listens on a port.
  
  Interactions:
    - Prints a startup message to the console.
*/
const PORT = process.env.PORT || 3000;             // Supports Heroku/production environment variables
app.listen(PORT, () => {
  console.log(`Inventory app listening on http://localhost:${PORT}`);
});


module.exports = app;                              // Exports app instance for testing or extensions
