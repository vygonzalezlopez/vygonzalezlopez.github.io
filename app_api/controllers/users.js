const mongoose = require("mongoose");
const User = require('../models/user');
const Model = mongoose.model('users');


// Get: /users= lists all users
const usersList = async(req, res) => {
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

// Get: /users/:username = lists single record based off username
const getUserByUsername = async(req, res) => {
    const q = await Model
        .find({'username' : req.params.username }) // Return single record
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

// Post: /users : creates new user record
const createUser = async(req, res) => {
    const q = await Model
        .create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,           // legacy field, still in schema
            role: req.body.role,
            securityquestion: req.body.securityquestion,
            securityAnswer: req.body.securityAnswer,
            passwordHash: req.body.passwordHash    // should be pre-hashed by caller

        }) // create single record
    

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

// Update: /users/:username = updates a single record based off username
const updateUser = async(req, res) => {
    const q = await Model
        .updateOne(
            { 'username': req.params.username },
            { $set: req.body }
        )
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

// Delete : /users/:username = deletes a single record based off username
const deleteUser = async(req, res) => {
    const q = await Model
        .deleteOne(
            { 'username' : req.params.username}
        )
        .exec()

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
    usersList,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser
};
