/**
 * Created by acer on 2017-11-16.
 * 懒加载(动态加载)oclazyload配置文件
 */
"use strict";
angular.module("myApp")
	.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
			debug:  false,
			events: false,
			modules: []
		});
	}]);
