/**
 * Created by acer on 2017-11-27.
 * 自定义跨域请求
 */
(function (angular) {
	angular.module('moviecat.crossdomain', [])
		.service('CrossDomain', ['$window', '$document', function ($window, $document) {
			this.jsonp = function (url, options, cb) {
				var cbName = 'my_jsonp_cb' + Math.random().toString().replace('.', '');
				window[cbName] = cb;
				var queryString = url.indexOf('?')==-1 ? '?' : '&';
				for (var key in options) {
					queryString += key + '=' +options[key] +'&'
				}
				queryString += 'callback=' + cbName;
				var scriptElement = $document[0].createElement('script');
				scriptElement.src = url + queryString;
				$document[0].body.appendChild(scriptElement);
			}
		}]);
})(angular);
