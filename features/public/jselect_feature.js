Pickle().Feature({
  name: "jSelect",
	Basic: function() {
	  this.Background();

		When('I create a basic "jSelect" control called "myselect" with "red, blue, green"');
		Then('I should see a "select" control called "myselect"'); 
  	$('body').empty();
  },
 	Complex: function () {
   this.Background();
  
		When('I create a basic "jSelect" control called "person[favorite_color]" with "red, blue, green"');
		Then('I should see a "select" control called "person_favorite_color"'); 
		
		$('body').empty();
		
	},
 
	Background: function  () {
	  $('body').empty();
	}

});
