Pickle().Feature({
  name: "jLink",
 	Basic: function() {
	  $('body').empty();
			
		When('I create a link "jackhq" with a url of "http://www.jackhq.com"');
		Then('jQuery should see "a[href=http://www.jackhq.com]"');	 
		
		$('body').empty();
			
	}
});