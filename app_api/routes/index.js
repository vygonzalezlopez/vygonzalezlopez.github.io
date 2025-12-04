const express = require("express");
const router = express.Router();

// Import the controllers we'll route
const usersCtrl = require("../controllers/users");
const itemsCtrl = require("../controllers/items");

// Users
router.route("/users").get(usersCtrl.usersList);
router.route("/users/:username").get(usersCtrl.getUserByUsername);
router.route("/users").post(usersCtrl.createUser);
router.route("/users/:username").put(usersCtrl.updateUser);
router.route("/users/:username").delete(usersCtrl.deleteUser);

// Items
router.route("/items").get(itemsCtrl.itemsList);
router.route("/items/:id").get(itemsCtrl.getItemById);

module.exports = router;
