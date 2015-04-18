'use strict';

angular.module('admin').controller('parsersController', ['$scope', 'Parser',
	function($scope,Parser) {
		$scope.parsers = [];
		$scope.urlParse = '';

		$scope.getParsers = function(){
			Parser.getParsers().then(function(data){
				//console.log(data);
				for(var i=0;i<data.data.length;i++){
					$scope.parsers.push({'name':data.data[i]._id,'check':false});
				}
			},function(data){
				alert(data.data);
			});
		};

		$scope.showChecker = function(parser){
			for(var i=0; i < $scope.parsers.length; i++){
				if($scope.parsers[i].name === parser)
					$scope.parsers[i].check = true;
				else
					$scope.parsers[i].check = false;
			}
		};

		$scope.validateParser = function(url,parser){
			Parser.validate(url,parser).then(function(data){
				$scope.urlParse='';
				alert('Success');
			},function(data){
				alert(data.data);
			});
		}
	}
]);