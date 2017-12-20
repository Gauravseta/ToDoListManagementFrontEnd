castObj.controller('repositoriesController',['$scope','$state','$stateParams','dataServices','$location','$rootScope',function($scope,$state,$stateParams,dataServices,$location,$rootScope){
			
		$scope.dueDate=new Date();
		if($stateParams.due_date) {
			$scope.dueDate=$stateParams.due_date;
		}

		$scope.addTask=function(){
			var due_date=$scope.dueDate.toLocaleDateString();
			var TaskObj = {
				name:$scope.taskName,
				due_date:due_date
			};
			dataServices.addTask(TaskObj).then(function(success){
				console.log(success);
				if(success.status==200){
					$state.go('todohome',{due_date:$scope.dueDate});
				}
			},
			function(err){
				console.log(err);
			});
		};

		$scope.cancel=function(){
			$state.go('todohome',{due_date:$scope.dueDate});
		}

        }]);

