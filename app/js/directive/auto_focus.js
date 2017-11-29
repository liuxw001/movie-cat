/**
 * Created by acer on 2017-11-29.
 * 实现左侧侧边栏焦点切换的指令
 */
"use strict";
angular.module("myApp")
	.directive('autoFocus', ['$location', function ($location) {
		return {
			restrict: 'A',
			link: function ($scope, elem, attr) {
				$('li').eq(0).addClass('active');
				$(elem).on('click', function () {
					$('li').removeClass('active');
					$(this).addClass('active');
				})
			}
		}
	}]);
