var app = angular.module("bomApp", [])
	.controller('financeController', financeController);

function financeController( $scope ){
	this.products = bom;
}

var bom = {
	'Categories': {
		'Outer structure' : {
			'CategoryId' : 10,
			'Cost' : 1575.00,
			'Budget': 2000.00,
			'Color': '#ff0000'
		},

		'Electronics' : {
			'CategoryId' : 11,
			'Cost' : 3000.00,
			'Budget': 500.00,
			'Color': '#ffff00'
		}

	},
	'Costs': [
		{
			'Product' : 'LEDs',
			'Description' : 'LEDs to make the traffic lights',
			'Quantity': 50,
			'Cost': 0.5,
			'CategoryId': 1,
			'TotalCost': null,
			'Link': null,
			'Comments': null
		},

		{
			'Product' : '680 Resistors',
			'Description' : 'Resistors for the traffic lights',
			'Quantity': 20,
			'Cost': 0.75,
			'CategoryId': 1,
			'TotalCost': null,
			'Link': null,
			'Comments': null
		},

		{
			'Product' : '555 IC',
			'Description' : 'Chip to create the traffic light timer',
			'Quantity': 10,
			'Cost': 0.1,
			'CategoryId': 1,
			'TotalCosts': null,
			'Link': null,
			'Comments': null

		},
		{
			'Product' : '2 x 4 lumber',
			'Description' : 'Lumber to help create the traffic light structure ',
			'Quantity': 20,
			'Cost': 0.1,
			'CategoryId': 2,
			'TotalCosts': null,
			'Link': null,
			'Comments': null

		},
		{
			'Product' : 'Plywood',
			'Description' : ' Traffic light panel ',
			'Quantity': 20,
			'Cost': 0.1,
			'CategoryId': 2,
			'TotalCosts': null,
			'Link': null,
			'Comments': null

		}
	]
};