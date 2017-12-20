angular.module("todo.services",['ui.router'])
		.factory("dataServices",function($http){
			var obj=this;

			//change here if you are pointing to different URL.
			var baseUrl="http://localhost:3000";

			//Do not touch these end points .Do not modify any.
			var addtask="/todolist/tasks/add";
			var gettasks="/todolist/tasks/";

			//Utility to get All tasks ,given Date param
			obj.getTasks=function(params){
				return $http.get(baseUrl+gettasks+params);
			}

			//Utility to add task ,given name and dueDate
			obj.addTask=function(params){
				return $http.post(baseUrl+addtask,params);
			}
			
			return obj;	
		});
