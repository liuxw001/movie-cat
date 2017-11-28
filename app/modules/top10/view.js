/**
 * Created by acer on 2017-11-16.
 * in_theaters的到控制器
 */
myApp.controller('top10Ctrl', ['$scope', 'CrossDomain', function ($scope, CrossDomain) {
	$scope.name = 'top10';
	$scope.subjects = [];
	$scope.totalCount = 0;
	CrossDomain.jsonp('http://api.douban.com/v2/movie/top250', {}, function (data) {
		console.log(data);
		$scope.subjects = data.subjects;
		$scope.totalCount = data.total;
		$scope.$apply('subjects');
	})
}]);
