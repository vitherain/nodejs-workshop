const express = require('express');
const router = express.Router();
const Users = require('../models/userModel');

router.get('/', function(request, response) {
    Users.find((err, users) => {
        response.json(users);
    });
});

router.post('/', function(request, response) {
    let newUser = Users(Object.assign({}, request.body));

    newUser.save(function(err) {
        if (err) throw err;

        response.status(201);
        response.end();
    });
});

router.get('/:userId', function(request, response, next) {
    let userId = request.params.userId;
    
    Users.findById(userId, function(err, user) {
        if (err) throw err;

        if (user) {
            response.json(user);
        } else {
            let err = new Error(`User with _id=${userId} was not found`);
            err.status = 404;
            next(err);
        }
    });
});

router.put('/:userId', function(request, response, next) {
    let userId = request.params.userId;

    Users.findByIdAndUpdate(userId, request.body, function(err, updatedUser) {
        if (err) throw err;

        if (updatedUser) {
            response.status(200);
            response.end();
        } else {
            let err = new Error(`User with _id=${userId} was not found`);
            err.status = 404;
            next(err);
        }
    });
});

router.delete('/:userId', function(request, response, next) {
    let userId = request.params.userId;
    
    Users.findByIdAndRemove(userId, function(err, removedUser) {
        if (err) throw err;

        if (removedUser) {
            response.status(200);
            response.end();
        } else {
            let err = new Error(`User with _id=${userId} was not found`);
            err.status = 404;
            next(err);
        }
    });
});

module.exports = router;
