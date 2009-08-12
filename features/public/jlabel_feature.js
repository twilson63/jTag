Pickle().Feature({
  name: "jLabel",
	Basic: function() {
	  this.Background();

		When('I create a basic "jLabel" control called "mylabel"');
		Then('I should see a "label" control for "mylabel"'); 
		
		$('body').empty();

	},	
	Background: function  () {
	  $('body').empty();
	}

});

	