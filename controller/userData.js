const db = require('../models');

// Create a User
exports.create = async (user, res) => {
    // Save to MySQL database
    db.User.create({
        firstName: user.body.firstName,
        lastName: user.body.lastName,
        age: user.body.age
    }).then(user => {
        res.status(200).json("insert data successfully");
        return user.userId;
    }).catch(function (err) {
        console.log("create failed with error: " + err);
        return 0;
    });
};

// Fetch all Users
exports.findAll = (req, res) => {
    db.User.findAll().then(users => {
        res.status(200).json({ "message": "get ALL User", "data": users });
        //    return users;
    }).catch(function (err) {
        console.log("findAll failed with error: " + err);
        return null;

    });
};

// Find a User by Id
exports.findById = async (req, res) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        res.status(200).json({ "message": "get User", "data": user });
        console.log(user);
    }).catch(function (err) {
        console.log("findById failed with error: " + err);
        return null;

    })
};

// Update a User
exports.update = (req, res) => {
    db.User.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then((user) => {
        res.status(200).json({ "message": "Update User Successfully", "data": user });
        return id;
    }).catch(function (err) {
        console.log("update failed with error: " + err);
        return 0;

    });
};

// Delete a User based on Id
exports.delete = (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        res.status(200).json({ "message": "Delete User Successfully", "data": user });
        //    return id;
    }).catch(function (err) {
        console.log("delete failed with error: " + err);
        return 0;
        // handle error;
    });
};