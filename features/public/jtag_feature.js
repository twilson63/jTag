// Feature("jTag", function(){
//   Scenario("Header1", function(){
//     When("I eval jTag('h1', 'jTag Rocks')");
//     Then('jQuery should see "h1:contains(\'jTag Rocks\')"');  
//   });
// });

Pickle().Feature({
  name: "jTag",
	Basic: function() {
		$('body').empty();

    When("I eval jTag('h1', 'jTag Rocks')");
    Then('jQuery should see "h1:contains(\'jTag Rocks\')"');  

    When("I eval jTag('p', 'jTag Paragraph Rocks')");
    Then('jQuery should see "p:contains(\'jTag Paragraph Rocks\')"');  
		
		$('body').empty();

	},
});

