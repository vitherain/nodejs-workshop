const express = require('express');
const router = express.Router();
const Cars = require('../models/carModel');

router.get('/', function(request, response) {
    Cars.find((err, cars) => {
        response.json(cars);
    });
});

router.post('/', function(request, response) {
    let newCar = Cars(Object.assign({}, request.body));

    newCar.save(function(err) {
        if (err) throw err;

        response.status(201);
        response.end();
    });
});

router.get('/:carId', function(request, response, next) {
    let carId = request.params.carId;
    
    Cars.findById(carId, function(err, car) {
        if (err) throw err;

        if (car) {
            response.json(car);
        } else {
            let error = new Error(`Car with _id=${carId} was not found`);
            error.status = 404;
            next(error);
        }
    });
});

router.put('/:carId', function(request, response, next) {
    let carId = request.params.carId;

    Cars.findByIdAndUpdate(carId, request.body, function(err, updatedCar) {
        if (err) throw err;

        if (updatedCar) {
            response.status(200);
            response.end();
        } else {
            let error = new Error(`Car with _id=${carId} was not found`);
            error.status = 404;
            next(error);
        }
    });
});

router.delete('/:carId', function(request, response, next) {
    let carId = request.params.carId;
    
    Cars.findByIdAndRemove(carId, function(err, removedCar) {
        if (err) throw err;

        if (removedCar) {
            response.status(200);
            response.end();
        } else {
            let error = new Error(`Car with _id=${carId} was not found`);
            error.status = 404;
            next(error);
        }
    });
});

module.exports = router;
