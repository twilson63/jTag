Pickle().Step({
  instruction: /^I eval (.*)$/,
  test: function(args) {
    $('body').append(eval(args[0]));
    return true;
  }
});

Pickle().Step({
	instruction: /^I create a basic "([^\"]*)" control called "([^\"]*)"$/,
	test: function(args) {
		$('body').append(window[args[0]](args[1]));
		return true;
	}
});

Pickle().Step({
 	instruction: /^I create a basic "([^\"]*)" control called "([^\"]*)" with "([^\"]*)"$/,
	test: function(args) {
		$('body').append(window[args[0]](args[1], args[2]));
		return true;
	}
});

Pickle().Step({
  instruction: /^I should see a "([^\"]*)" control called "([^\"]*)"$/,
	test: function (args) {
    return $(args[0] + '#' + args[1]).length == 1;
	}
});  

Pickle().Step({
  instruction: /^I should see a "([^\"]*)" control for "([^\"]*)"$/,
	test: function (args) {
    return $(args[0] + '[for=' + args[1] + ']').length == 1;
	}
});  

Pickle().Step({
  instruction: /^I create a "([^\"]*)" control called "([^\"]*)" with "([^\"]*)"$/,
	test: function(args) {
		$('body').append(window[args[0]](args[1],args[2]));
		return true;
	}
});

Pickle().Step({
	instruction: /^I should see "([^\"]*)" in "([^\"]*)"$/,
	test: function(args) {
		return $('input#' + args[1]).val() == args[0];
  }
});

Pickle().Step({
	instruction: /^I create a "([^\"]*)" control called "([^\"]*)" with "([^\"]*)" and a style of "([^\"]*)"$/,
	test: function(args) {
    $('body').append(window[args[0]](args[1],args[2], jAt('style', args[3])));
		return true;
	}
});

Pickle().Step({
	instruction: /^I should see "([^\"]*)" with a style of "([^\"]*)" as "([^\"]*)"$/,
	test: function(args) {
    return $('#' + args[0]).css(args[1]) == args[2]; 
	}
});

Pickle().Step({
  instruction: /^I create a "([^\"]*)" tag with "([^\"]*)"$/,
  test: function(args) {
    $('body').append(window[args[0]](args[1]));
    return true;
  }
});

Pickle().Step({
  instruction: /^I should see a "([^\"]*)" tag$/,
  test: function (args) {
    return $(args[0]).length == 1; 
  }
});

Pickle().Step({
  instruction: /^I should see a "([^\"]*)" tag with "([^\"]*)"$/,
  test: function (args) {
   return $(args[0] + ':contains("' + args[1] + '")').length == 1; 
  }
});


Pickle().Step({
  instruction: /^I should not see a "([^\"]*)" tag with "([^\"]*)"$/,
  test: function (args) {
    return $(args[0] + ':contains("' + args[1] + '")').length == 0; 
  }
});

Pickle().Step({
  instruction: /^I create a link "([^\"]*)" with a url of "([^\"]*)"$/,
  test: function (args) {
    $('body').append(jLink(args[0], args[1]));
    return true; 
  }
});


Pickle().Step({
  instruction: /^jQuery should see "([^\"]*)"$/,
  test: function (args) {
    return $(args[0]).length == 1;
  }
});

Pickle().Step({
  instruction: /^I create a "([^\"]*)" tag with "([^\"]*)" content as "([^\"]*)"$/,
  test: function(args) {
    $('body').append(window[args[0]](args[2].split(','), args[1]));
    return true;
  }
});

Pickle().Step({
  instruction: /^I create a jDiv with "([^\"]*)" content as "([^\"]*)" and "([^\"]*)"$/,
  test: function(args) {
    $('body').append(jDiv(args[1],args[2].split(','), args[0]));
    return true;
  }
})



