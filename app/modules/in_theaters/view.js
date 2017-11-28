/**
 * Created by acer on 2017-11-16.
 * in_theaters的到控制器
 */
myApp.controller('inTheatersCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.name = '正在上映';
	$scope.subjects = [];
	$http.get('/app/data/in_theaters.json').then(function (res) {
		if(res.status == 200){
			$scope.subjects = res.data;
		}
	}, function (error) {
		console.log(error);
	});
}]);
