# jSelect

jSelect function creates a html drop down control.

## jSelect(name, options, [attributes])

name - is the unique name of the select control

options - is the array of values that appear in the drop down control

Example with option array:

    jSelect('myselect', ['one','two','three']);

Generates the following HTML:
    
		<select  id='myselect'><option value='one'>one</option><option value='two'>two</option><option value='three'>three</option></select>

Preview:

<select  id='myselect'><option value='one'>one</option><option value='two'>two</option><option value='three'>three</option></select>

<hr />

attributes - is an (optional) parameter that allows you to add html attributes to the select control.

Example with Attributes:

    jSelect('myselect', ['one','two','three'], jAt('style','font-size:30px'));

Generates the following HTML:
    
		<select style='font-size:30px' id='myselect'><option value='one'>one</option><option value='two'>two</option><option value='three'>three</option></select>

Preview:

<select style='font-size:30px' id='myselect'><option value='one'>one</option><option value='two'>two</option><option value='three'>three</option></select>
