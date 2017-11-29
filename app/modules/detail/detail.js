/**
 * Created by acer on 2017-11-29.
 * 电影详情js
 */
myApp.controller('detailCtrl', ['$scope', 'CrossDomain', '$stateParams', '$state', '$rootScope',
	function ($scope, CrossDomain, $stateParams, $state, $rootScope) {
		$scope.movie = {};
		var id = $stateParams.id;
		CrossDomain.jsonp('http://api.douban.com/v2/movie/subject/'+id, {}, function (data) {
			$scope.movie = {
				title: data.title,
				image: data.images.small,
				summary: data.summary
			};
			$scope.$apply();
		});
		$scope.goBack = function () {
			$state.go($rootScope.address.url, {page: $rootScope.address.page});
		}
	}]);
