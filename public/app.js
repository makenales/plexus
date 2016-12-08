angular.module("plexus", ["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
    .when('/',
      {
        controller: 'mainController',
        templateUrl: 'form.html'
      }
    )
})

.factory('Patient', ['$http',function($http) {
  return {
    get : function() {
      return $http.get('/api/patients');
    },
    create : function(patientData) {
      return $http.post('/api/patient', patientData);
    }
  }
}])

.controller('mainController', ['$scope','$http','Patient', function($scope, $http, Patient) {
    $scope.formData = {gender: 'male'};

    Patient.get()
      .success(function(data) {
        $scope.patients = data;
      });
    
    $scope.addPatient = function() {
      $scope.patients.push($scope.formData);
      Patient.create($scope.formData);
      $scope.formData = {gender: 'male'};      
    };
}])

.controller('listController', ['$scope','$http','Patient', function($scope, $http, Patient) {
  Patient.get()
    .success(function(data) {
      $scope.patients = data;
      $scope.loading = false;
  });
}]);