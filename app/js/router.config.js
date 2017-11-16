/**
 * Created by acer on 2017-11-16.
 * 路由配置
 */
angular.module('myApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('inTheaters');
		$stateProvider
			.state('inTheaters', {
				url: '/inTheaters',
				templateUrl: 'modules/in_theaters/view.html'
			}).state('comingSoon', {
				url: '/comingSoon',
				templateUrl: 'modules/coming_soon/view.html'
			}).state('top10', {
				url: '/top10',
				templateUrl: 'modules/top10/view.html'
			})
	}]);
