/**
 * Created by acer on 2017-11-16.
 * 路由配置
 */
"use strict";
angular.module("myApp")
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('app/inTheaters');
		$stateProvider
			.state('app', {
				url: '/app',
				templateUrl: 'tpl/app.html'
			})
			.state('app.inTheaters', {
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
			}).state('app.comingSoon', {
				url: '/comingSoon',
				templateUrl: 'modules/coming_soon/view.html'
			}).state('app.top10', {
				url: '/top10/page=:page',
				templateUrl: 'modules/top10/view.html',
				resolve: {
					deps: ['$ocLazyLoad', function( $ocLazyLoad){
						return $ocLazyLoad.load([
							'modules/top10/view.css',
							'modules/top10/view.js'
						]);
					}]
				}
			})
	}]);
