
angular.module("todoApp",['todo.controllers','todo.services','ui.router','ngMaterial'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise("/todohome");
			$stateProvider.state('todohome',{
				url:"/todohome",
				templateUrl:"partials/todohome.view.html",
				controller:"todohomeController",
				params: {
					due_date:null
				}
			})
			.state('todoadd',{
				url:"/todoadd",
				templateUrl:"partials/todoadd.view.html",
				controller:"todoaddController",
				params: {
					due_date:null
				}
			});
			
			
		})
		.controller("todoController",['$scope','dataServices','$rootScope',function($scope,dataServices,$rootScope){
			$scope.headerTitle="To do list Management";		
		}]);

