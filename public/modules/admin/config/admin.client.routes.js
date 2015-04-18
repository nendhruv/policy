'use strict';

// Setting up route
angular.module('admin').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('adminMain', {
			url: '/admin',
			templateUrl: 'modules/admin/views/main-admin.client.view.html'
		}).
		state('parsers', {
			url: '/admin/parsers',
			templateUrl: 'modules/admin/views/parsers-admin.client.view.html'
		});
	}
]);