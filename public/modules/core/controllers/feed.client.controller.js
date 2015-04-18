'use strict';


angular.module('core').controller('FeedController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.showFilter = function(flag){
			console.log(flag);
			$scope.el = angular.element(document.querySelector('.navigation'));
			$scope.fl = angular.element(document.querySelector('.filter'));
				$scope.fl2 = angular.element(document.querySelector('.filter2'));
				$scope.sf = angular.element(document.querySelector('.sub-filter'));

				$scope.sf2 = angular.element(document.querySelector('.sub-filter2'));
			if(flag==1){
				$scope.el.addClass('navigation-select');
				$scope.fl.addClass('filter-active');
				$scope.fl2.addClass('filter-active');
				$scope.sf.addClass('sub-filter-active');
			}
			else if(flag==2) {
				$scope.el.addClass('navigation-select');
				$scope.fl.addClass('filter-active');
				$scope.fl2.addClass('filter-active');
				$scope.sf2.addClass('sub-filter-active2');
			}
			else{

			//$scope.el = angular.element(document.querySelector('.navigation-select'));
			    $scope.sf.removeClass('sub-filter-active');
				$scope.sf2.removeClass('sub-filter-active2');
				
				$scope.el.removeClass('navigation-select');
				$scope.fl.removeClass('filter-active');
				$scope.fl2.removeClass('filter-active');
				

			}


		}


	}
]);