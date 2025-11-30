// Utility to hash passwords and update users.json
// Demonstrates algorithmic transformation using SHA-256

const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

// Path to your users.json data file
const usersPath = path.join(__dirname, "../../data/users.json");

// Function to create a SHA256 hash
function hashPassword(plainTextPassword) {
  return crypto.createHash("sha256").update(plainTextPassword).digest("hex");
}

// Function to update all users with passwordHash
function updateUserHashes() {
  const raw = fs.readFileSync(usersPath, "utf8");
  const users = JSON.parse(raw);

  users.forEach(user => {
    if (!user.passwordHash) {
      user.passwordHash = hashPassword(user.password);
    }
  });

  fs.writeFileSync(usersPath, JSON.stringify(users, null, 4));
  console.log("✔ All users updated with passwordHash.");
}

// When this script is run directly (node password-hasher.js), execute it
if (require.main === module) {
  updateUserHashes();
}

module.exports = { hashPassword, updateUserHashes };
