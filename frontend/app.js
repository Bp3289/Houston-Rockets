angular.module("Rockets", ['ngRoute'])
.controller("RocketController", RocketController)
.directive('secondDirective', secondDirective)
// .config(rocketRoster)
.factory('Rockets', Rockets);


Rockets.$inject = ['$http'];
function Rockets($http) {
	var rocketMethods = {};
	rocketMethods.getAllRockets = function (){
		return $http.get("/players");
	};
	rocketMethods.getOneRocket = function(id) {
		return $http.get("/players" + id);
	};
	return rocketMethods;
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
