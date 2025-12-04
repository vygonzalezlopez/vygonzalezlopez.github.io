const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname:  { type: String, required: true },
  username:  { type: String, required: true, unique: true },
  password:  { type: String, required: true }, // plain text (for now; legacy)
  role:      { type: String, required: true },
  securityquestion: { type: String, required: true },
  securityAnswer:   { type: String, required: true },
  passwordHash:     { type: String, required: true }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
