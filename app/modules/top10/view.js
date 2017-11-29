/**
 * Created by acer on 2017-11-16.
 * in_theaters的到控制器
 */
myApp.controller('top10Ctrl', ['$scope', 'CrossDomain', '$stateParams', '$state', '$rootScope', 'AppConfig',
	function ($scope, CrossDomain, $stateParams, $state, $rootScope, AppConfig) {
		$scope.name = '';
		$scope.subjects = [];
		$scope.totalCount = 0;
		$scope.loading = true;
		$scope.totalPages = 0;
		var count = AppConfig.pageSize;
		$scope.currentPage = parseInt($stateParams.page ? $stateParams.page : 1);
		var start = ($scope.currentPage - 1)*count;
		CrossDomain.jsonp(AppConfig.listAddress+'top250',
			{
				start: start,
				count: count
			}, function (data) {
				$scope.name = data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;
				$scope.totalPages = Math.ceil(data.total / count);
				$scope.loading = false;
				$scope.$apply();
		});
		$scope.goPage = function (page) {
			if(page >= 1 && page <= $scope.totalPages)
				$state.go('app.top10', {page: page});
		};
		$scope.goDetail = function (id) {
			$rootScope.address = {
				url: 'app.top10',
				page: $stateParams.page
			};
			$state.go('app.detail', {id: id});
		}
}]);
