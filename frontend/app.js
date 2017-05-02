var app = angular.module("Rockets", ['ngRoute'])
.controller("RocketController", RocketController)
.controller("RocketControllerId", RocketControllerId)
// .config(rocketRoster)
.factory('Rockets', Rockets);


Rockets.$inject = ['$http'];
function Rockets($http) {
	var rocketMethods = {};
	rocketMethods.getAllRockets = function (){
		return $http.get("http://localhost:3000/players");
	};
	rocketMethods.getOneRocket = function(id) {
		return $http.get("http://localhost:3000/players/:id");
	};
	return rocketMethods;
}

// rocketRoster.$inject = ['$routeProvider', '$locationProvider'];

app.config(function($routeProvider, $locationProvider){
	$routeProvider 
	.when('/', {
		templateUrl: 'templates/allRockets.html',
		controller: 'RocketController'
	})
	.when('/players/:id', {
		templateUrl: '/templates/oneRocket.html',
		controller: 'RocketControllerId'
	});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
});

RocketController.$inject = ['$scope', '$http'];
function RocketController($scope, $http) {
	
	var self = this;
	self.all = [];
	self.getAllRockets = getAllRockets;
	
	getAllRockets();

	function getAllRockets(){
		$http
	    .get("http://localhost:3000/players/")
	    .then(function(response){
	      console.log(response.data);
	      self.all = response.data;
	    });
	}

	RocketControllerId.$inject = ['$http','$scope', '$routeParams'];
	function RocketControllerId($http, $scope, $routeParams){
			$http
		.get("http://localhost:3000/players/" + $routeParams.id)
		.then(function(response){
			console.log($routeParams.id + "Id");
			console.log(response.data + "here is the data");
			$scope.player = response.data;
		});

	}
	
	
	


}
