/**
 * Created by acer on 2017-11-27.
 * 所有的请求接口
 */
angular.module('myApp')
	.factory('constants', function () {
		var HOST = "/app/data";

		return {
			INTHEATERS: HOST+'/in_theaters',
			TOP10: HOST+'/top250.json'
		}
	});
