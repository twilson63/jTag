Pickle().Feature({
  name: "jDiv",
 	Basic: function() {
	  $('body').empty();
			
		When('I create a "jDiv" tag with "Hello World" content as "mydiv"');
		Then('jQuery should see "div#mydiv:contains(\'Hello World\')"');	 
		
		$('body').empty();
			
	},
 	Classy: function() {
	  $('body').empty();
			
		When('I create a "jDiv" tag with "Need a class" content as "required,cool"');
		Then('jQuery should see "div.required"');	 
		And('jQuery should see "div.cool"');	 
		
		$('body').empty();
			
	},
	BasicAndClassy: function () {
	  $('body').empty();
	  
	  When('I create a jDiv with "Id and Class" content as "mydiv" and "required,cool"')
	  Then('jQuery should see "div#mydiv"');
	  And('jQuery should see "div.required"');
	  And('jQuery should see "div.cool"');
	  
	  $('body').empty();
	}
	
  
  
});