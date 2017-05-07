const express = require('express');
const router = express.Router();

let idCounter = 0;

const users = [
    { id: ++idCounter, firstName: 'George', lastName: 'Bush', userName: 'george' },
    { id: ++idCounter, firstName: 'Donald', lastName: 'Trump', userName: 'donald' },
    { id: ++idCounter, firstName: 'Barack', lastName: 'Obama', userName: 'barack' }
];

router.get('/', function(request, response) {
    response.json(users);
});

router.post('/', function(request, response) {
    let user = request.body;
    user.id = ++idCounter;
    users.push(user);
    response.status(201);
    response.end();
});

router.get('/:userId(\\d+)', function(request, response, next) {
    let userId = parseInt(request.params.userId, 10);
    let user = users.find((user) => user.id === userId);

    if (user) {
        response.json(user);
    } else {
        let err = new Error(`User with id=${userId} was not Found`);
        err.status = 404;
        next(err);
    }
});

router.get('/:userName(\\D+)', function(request, response, next) {
    let userName = request.params.userName;
    let user = users.find((user) => user.userName === userName);

    if (user) {
        response.json(user);
    } else {
        let err = new Error(`User with id=${userName} was not Found`);
        err.status = 404;
        next(err);
    }
});

router.put('/:userId', function(request, response, next) {
    let userId = parseInt(request.params.userId, 10);
    let userIndex = users.map((usr) => { 
        return usr.id 
    }).indexOf(userId);
    let user = users[userIndex];

    if (user) {
        let updatedUser = {};
        Object.assign(updatedUser, user, request.body);
        users[userIndex] = updatedUser;
        response.status(200);
        response.end();
    } else {
        let err = new Error(`User with id=${userId} does not exist`);
        err.status = 404;
        next(err);
    }
});

module.exports = router;
