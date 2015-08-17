(function() {
	var app = angular.module("bomApp", [])
		.controller('bomController', bomController);

	app.directive('bomView', function(){

	function bomController(){
		this.products= bom;
		this.totalCost = 0;

		this.categoryLookUp={};
		/*this.mapCategory = mapCategory;
		function mapCategory( ){
			for( var i = 0; i < this.products.Categories.length; i++){
				this.categoryLookUp[]
			}
		}*/

		var items = this.products.Costs;
		// this.addItem = addItem;
		this.deleteItem = deleteItem;
		function deleteItem( index ){
			if( !items[index] ){
				throw new Error ('Editing product that does not exist!')
			}
			items.pop( index );
		}

		this.editItem = editItem;
		function editItem( index ){
			if( !items[index] ){
				throw new Error ('Editing product that does not exist!')
			}
			return;
		}
			
		this.calculateCost = calculateCost;
		function calculateCost(){
			var totalCost = 0;
			for (var i =0 ; i <items.length; i++){
				items[i].TotalCost = items[i].Quantity * items[i].Cost;
				totalCost += items[i].TotalCost;
			}
			this.totalCost = totalCost;
			return;
		}

		// function addItem( var )
		calculateCost();
		
	};

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

} );
}())
