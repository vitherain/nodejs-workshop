var myApp = angular.module("MyApp", []);

myApp.controller("MyCtrl", ['$http', function ($http) {

    var self = this;
  
    loadCars = function() {
        $http.get('/cars').then(function(response) {
            self.cars = response.data;
        });
    };
    loadCars();
  
    self.sendCar = function(car) {
        if (car._id) {
            $http.put('/cars/' + car._id, car).then(function() {
                loadCars();
                self.newCar = null;
            });
        } else {
            $http.post('/cars', car).then(function() {
                loadCars();
                self.newCar = null;
            });
        }        
    };

    self.editCar = function(car) {
        $http.get('/cars/' + car._id).then(function(response) {
            self.newCar = response.data;
        });
    };

    self.deleteCar = function(car) {
        $http.delete('/cars/' + car._id).then(loadCars);
    };
}]);
