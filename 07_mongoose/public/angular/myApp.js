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
        if (person.id) {
            $http.put(`/users/${person.id}`, person).then(function() {
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
        self.newPerson = Object.assign({}, person);
    };

    self.deletePerson = function(person) {
        $http.delete(`/users/${person.id}`).then(loadUsers);
    };
}]);
