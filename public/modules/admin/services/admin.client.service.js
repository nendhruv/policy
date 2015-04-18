'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('admin').factory('Parser', ['$http','$q',
	function($http,$q) {
		var service = {};

		service.getParsers = function(){
			var deferer = $q.defer();
			$http.get('/admin/sources/top').success(function(data){
				deferer.resolve(data);
			}).error(function(data){
				deferer.reject(data);
			});
			return deferer.promise;
		};

		service.validate = function(url,parser){
			var deferer = $q.defer();
			$http.get('/admin/parsers/validate?parser='+parser+'&url='+url).success(function(data){
				deferer.resolve(data);
			}).error(function(data){
				deferer.reject(data);
			});
			return deferer.promise;
		};

		return service;
	}
]);