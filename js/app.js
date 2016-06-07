var app = angular.module("myapp",['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('homes',{
		url:'/home',
		templateUrl:'../state1.html',
		controller:'homeCtrl'
	})
	.state('info',{
		url:'/info',
		templateUrl:'../info.html'
	});
});
