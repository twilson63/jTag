Pickle().Feature({
  name: "jText",
	Basic: function() {
	  this.Background();

		When('I create a basic "jText" control called "mytext"');
		Then('I should see a "input" control called "mytext"'); 
		
		$('body').empty();

	},
	WithValue: function() {
		this.Background();

		When('I create a "jText" control called "mytext" with "Hello World"');
		Then('I should see a "input" control called "mytext"');
		And('I should see "Hello World" in "mytext"');

		$('body').empty();
	},
	WithValueAndAttributes: function() {
		this.Background();

		When('I create a "jText" control called "mytext" with "Hello World" and a style of "width:300px;"');
		Then('I should see a "input" control called "mytext"');
		And('I should see "Hello World" in "mytext"');
    And('I should see "mytext" with a style of "width" as "300px"');

		$('body').empty();  	
	},
	Background: function  () {

	  $('body').empty();
	}

});

