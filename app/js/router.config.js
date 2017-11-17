/**
 * Created by acer on 2017-11-16.
 * 路由配置
 */
"use strict";
angular.module("myApp")
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('comingSoon');
		$stateProvider
			.state('inTheaters', {
				url: '/inTheaters',
				templateUrl: 'modules/in_theaters/view.html',
				resolve: {
					deps: ['$ocLazyLoad', function( $ocLazyLoad){
							return $ocLazyLoad.load([
								'modules/in_theaters/view.css',
								'modules/in_theaters/view.js'
							]);
						}]
				}
			}).state('comingSoon', {
				url: '/comingSoon',
				templateUrl: 'modules/coming_soon/view.html'
			}).state('top10', {
				url: '/top10',
				templateUrl: 'modules/top10/view.html'
			})
	}]);
