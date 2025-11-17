/*
  === Route File: index.js ===
  Purpose:
    - Defines main application routes for login, dashboard, and stub pages.
*/

const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth.controller");         // Login controller
const inventory = require("../controllers/inventory.controller"); // Dashboard controller
const pages = require("../controllers/pages.controller");       // Stub pages controller

// === Auth & Landing Routes ===

// Root route → Login page
router.get("/", auth.login); // Landing page: login screen

// === Main Application Routes ===

// Dashboard (Inventory main view)
router.get("/dashboard", inventory.index); // Main inventory dashboard

// Stub pages for navigation links
router.get("/reports", pages.reports);
router.get("/orders", pages.orders);
router.get("/users", pages.users);
router.get("/settings", pages.settings);

// Placeholder for links in footer
router.get("/placeholder", (req, res) => {                   // Defines a simple inline route handler for /placeholder
  res.render("placeholder", { title: "Placeholder" });       // Renders a placeholder view with a basic title parameter
});

module.exports = router;

