    === File: sample-items.json ===
  Purpose:
    - Provides mock inventory data during early development.
    - Replaces the need for a live SQLite database while designing UI and controllers.
    - Supports inventory.controller.js by supplying an array of item objects.

  Interactions:
    - Loaded in inventory.controller.js using fs.readFileSync + JSON.parse.
    - Data is passed directly into index.hbs for Handlebars table rendering.
    - Will later be replaced by database-driven queries once SQLite models/APIs are implemented.

