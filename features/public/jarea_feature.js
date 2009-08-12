Pickle().Feature({
  name: "jArea",
	Basic: function() {
	  this.Background();

		When('I create a basic "jArea" control called "myarea"');
		Then('I should see a "textarea" control called "myarea"'); 
  	$('body').empty();
  },
	Background: function  () {
	  $('body').empty();
	}

});

