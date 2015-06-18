(function (){
	var app=angular.module('movieDatabase', []);

	app.controller('MovieController', function(){
		this.products= movies;
	});


})();