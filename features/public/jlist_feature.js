Pickle().Feature({
  name: "jList",
 	Basic: function() {
	  $('body').empty();
			
		When('I create a "jList" tag with "Red, Green, Blue"');
		Then('I should see a "ul" tag');	 
	  And('I should see a "li" tag with "Red"');
		And('I should see a "li" tag with "Green"');
		And('I should see a "li" tag with "Blue"');
		And('I should not see a "li" tag with "Black"');
		
		$('body').empty();
			
	}
});
