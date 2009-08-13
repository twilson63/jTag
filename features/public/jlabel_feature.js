Pickle().Feature({
  name: "jLabel",
	Basic: function() {
	  this.Background();

		When('I create a basic "jLabel" control called "mylabel"');
		Then('I should see a "label" control for "mylabel"'); 
		
		$('body').empty();

	},	
	Complex: function() {
    this.Background();
  
		When('I create a basic "jLabel" control called "complex[name]"');
		Then('I should see a "label" control for "complex_name"'); 
		
		$('body').empty();
		
	},		
  Background: function  () {
	  $('body').empty();
	}

});

	
