(function(){
	var app= angular.module('bomApp', [])
	app.directive('settingsView', function(){
		return{
			restrict: 'E',
			templateUrl: 'settings-view.html';
		};

	} );

}())