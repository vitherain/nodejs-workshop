var myApp = angular.module("MyApp", []);

myApp.controller("MyCtrl", ['$http', function ($http) {

    var self = this;
  
    loadUsers = function() {
        $http.get('/users').then(function(response) {
            self.people = response.data;
        });
    }
    loadUsers();
  
    self.sendPerson = function(person) {
        if (person._id) {
            $http.put('/users/' + person._id, person).then(function() {
                loadUsers();
                self.newPerson = null;
            });
        } else {
            $http.post('/users', person).then(function() {
                loadUsers();
                self.newPerson = null;
            });
        }        
    };

    self.editPerson = function(person) {
        $http.get('/users/' + person._id).then(function(response) {
            self.newPerson = response.data;
        });
    };

    self.deletePerson = function(person) {
        $http.delete('/users/' + person._id).then(loadUsers);
    };
}]);
