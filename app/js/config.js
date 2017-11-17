/**
 * Created by acer on 2017-11-17.
 * ng配置模块,加载配置
 */
var myApp = angular.module("myApp")
	.config(["$provide","$compileProvider","$controllerProvider","$filterProvider",
		function($provide,$compileProvider,$controllerProvider,$filterProvider){
			myApp.controller = $controllerProvider.register;
			myApp.directive  = $compileProvider.directive;
			myApp.filter     = $filterProvider.register;
			myApp.factory    = $provide.factory;
			myApp.service    = $provide.service;
			myApp.constant   = $provide.constant;
			myApp.value      = $provide.value;
		}]);
