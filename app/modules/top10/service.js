/**
 * Created by acer on 2017-11-27.
 * 本模块所用到的http请求
 */
myApp.factory('top10', function(constants, $http, $q) {
	return {
		// top_10: function (params) {
		// 	var deferred = $q.defer();
		// 	return $http.get(constants.TOP10,$.param(params)).success(function(data){
		// 		deferred.resolve(data);
		// 	}).error(function(){
		// 		deferred.reject();
		// 	}), deferred.promise;
		// }
	}
});
