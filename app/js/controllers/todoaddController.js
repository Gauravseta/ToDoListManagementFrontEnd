castObj.controller('todoaddController',['$scope','$state','$stateParams','dataServices','$location','$rootScope',function($scope,$state,$stateParams,dataServices,$location,$rootScope){
			
		$scope.dueDate=new Date();
		if($stateParams.due_date) {
			$scope.dueDate=$stateParams.due_date;
		}

		//Add task at backend by sending taskname and duedate
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

		//Return back to home screen,if no taskname to be inserted
		$scope.cancel=function(){
			$state.go('todohome',{due_date:$scope.dueDate});
		}

        }]);

