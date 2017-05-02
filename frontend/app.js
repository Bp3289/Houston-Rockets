angular.module("Rockets", ['ngRoute'])
.controller("RocketController", RocketController)
.directive('secondDirective', secondDirective)
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

function rocketRoster($routeProvider, $locationProvider) {
	$routeProvider 
	.when('/', {
		templateUrl: 'templates/allRockets.html',
		controller: 'RocketController'
	})
	.when('/players/:id', {
		templateUrl: '/templates/oneRocket.html',
		controller: 'RocketControllerId'
	});
}

RocketController.$inject = ['Rockets'];
function RocketController(Rockets) {
	console.log("Hey guys");
	var vm = this;
	vm.helloWorld = ('HEy people!');
	Rockets.getOneRocket(3).then(function(response) {
		vm.oneRocket = response.data;
	});
	Rockets.getAllRockets().then(function(response){
		vm.allRockets = response.data;
	});
	this.update = function() {
		console.log("input is changing");
	};


}
