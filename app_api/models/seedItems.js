// Bring in the DB Connection and the Item schema
const Mongoose = require('./db');
const Item = require('./item');

// Read seed data from json file
var fs = require ('fs');
var items = JSON.parse(fs.readFileSync('./data/sample-items.json', 'utf8'));

//delete any existing records, then insert seed data
const seedDB = async () => {
    await Item.deleteMany({});
    await Item.insertMany(items);
};

// close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});