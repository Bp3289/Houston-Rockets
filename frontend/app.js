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
		return $http.get("http://localhost:3000/players/:id" + id);
	};
	return rocketMethods;
}

rocketRoster.$inject = ['$routeProvider'];

function rocketRoster($routeProvider) {
	$routeProvider 
	.when('/players', {
		templateUrl: 'templates/allRockets.html'
	})
	.when('/players/:id', {
		templateUrl: '<h1>This is the about me page</h1>'
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

function secondDirective() {
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'templates/secondDirective.html',
		scope: {
			derogative: '@'
		}
	};

}
