// Bring in the DB Connection and the Item schema
const Mongoose = require('./db');
const User = require('./user');

// Read seed data from json file
var fs = require ('fs');
var users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

//delete any existing records, then insert seed data
const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(users);
};

// close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});