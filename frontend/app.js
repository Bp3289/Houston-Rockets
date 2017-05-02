var app = angular.module("Rockets", ['ngRoute'])
.controller("RocketController", RocketController)
.controller("RocketControllerId", RocketControllerId)
.config(rocketRoster)
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

rocketRoster.$inject = ['$routeProvider', '$locationProvider'];

function rocketRoster($routeProvider, $locationProvider){
	$routeProvider 
	.when('/', {
		templateUrl: 'templates/allRockets.html',
		controller: 'RocketController as rocket'
	})
	.when('/players/:id', {
		templateUrl: '/templates/oneRocket.html',
		controller: 'RocketControllerId as rocketId'
	});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
}

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
	      self.allRockets = response.data;
	    });
	    this.update = function() {
	    	console.log("rocket is changing");
	    };
	}

	

}

RocketControllerId.$inject = ['$http','$scope', '$routeParams'];
	function RocketControllerId($http, $scope, $routeParams){
			var self = this;
	


			$http
		.get("http://localhost:3000/players/" + $routeParams.id)
		.then(function(response){
			console.log($routeParams.id + "Id");
			console.log(response.data + "here is the data");
			self.player = response.data;
		});

		}
