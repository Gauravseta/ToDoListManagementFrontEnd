var castObj=angular.module('todo.controllers',['ui.router','ngMaterial'])
	.controller('todohomeController',['$scope','dataServices','$state','$stateParams','$rootScope',function($scope,dataServices,$state,$stateParams,$rootScope){

	        $scope.headerTitle="To do list Management";  //Text to display in top header
		$scope.myDate=new Date();

		if($stateParams.due_date){
			$scope.myDate=$stateParams.due_date;
		}
		$scope.showTasks=function(){
			console.log($scope.myDate.toLocaleDateString());
		};

		

		$scope.$watch('myDate',function(currVal,oldVal){
			console.log(currVal.toLocaleDateString());
			var promise=dataServices.getTasks(currVal.toLocaleDateString());
			promise.then(function(success){
				$scope.tasks=success.data;
			},function(err){
				console.log(err);
			});
		});

		$scope.goToAddScreen=function(){
			$state.go('repositories',{due_date:$scope.myDate});
		}

        }]);

