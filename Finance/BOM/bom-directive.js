var app = angular.module("bomApp", []);

app.directive('bomView', function(){
	return{
		restrict: 'E',
		controller: 'bomController',
		controllerAs: 'bom',
		templateUrl: 'bom-view.html'
	};
} );