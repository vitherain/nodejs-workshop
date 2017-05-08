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

router.get('/:userId(\\d+)', function(request, response, next) {
    let userId = request.params.userId;
    
    Users.findById(userId, function(err, user) {
        if (err) throw err;

        response.json(user);
    });
});

router.get('/:userName(\\D+)', function(request, response, next) {
    let userName = request.params.userName;
    
    Users.findOne({ userName: userName }, function(err, user) {
        if (err) throw err;

        response.json(user);
    });
});

router.put('/:userId', function(request, response, next) {
    let userId = request.params.userId;

    Users.findByIdAndUpdate(userId, request.body, function(err) {
        if (err) throw err;

        response.status(200);
        response.end();
    });
});

router.delete('/:userId', function(request, response, next) {
    let userId = request.params.userId;
    
    Users.remove({ id: userId }, function(err) {
        if (err) throw err;

        response.status(200);
        response.end();
    });
});

module.exports = router;
