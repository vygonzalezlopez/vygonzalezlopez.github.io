const mongoose = require("mongoose");
const Item = require('../models/item');
const Model = mongoose.model('items');

// Get: /items = lists all items
const itemsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment the following line to show results of query on the console
        // console.log(q);
    
    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// Get: /items/:id = lists single record based off id
const getItemById = async(req, res) => {
    const q = await Model
        .find({'id' : req.params.id }) // Return single record
        .exec();

        // Uncomment the following line to show results of query on the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);            
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    itemsList,
    getItemById
};
