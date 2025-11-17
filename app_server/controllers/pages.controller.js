/*
  === Controller: pages.controller.js ===
  Purpose:
    - Renders stub pages for sections that will be implemented later.
    - Each action maps to a navigation entry (Reports, Orders, Users, Settings).
*/

exports.reports = (req, res) => {
  res.render("pages/reports", {
    title: "Reports - Inventory Management System"
  });
};

exports.orders = (req, res) => {
  res.render("pages/orders", {
    title: "Orders - Inventory Management System"
  });
};

exports.users = (req, res) => {
  res.render("pages/users", {
    title: "Users - Inventory Management System"
  });
};

exports.settings = (req, res) => {
  res.render("pages/settings", {
    title: "Settings - Inventory Management System"
  });
};