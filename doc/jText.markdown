# jText

jText is a method that return the HTML for a text input control.

## jText(name, [value], [attributes]) 

name - sets both the id and name attribute of the input tag

    jText('textname')
    
Generates the following html:
    
    <input type='text' id='textname' name='textname' />
    
Preview:

<input type='text' id='textname' name='textname' />

<hr />

value - sets the value of the input tag to pre-populate the form.

     jText('textname','textvalue')
     
Generates the following html:

     <input type='text' id='textname' name='textname' value='textvalue' />
     
Preview:

<input type='text' id='textname' name='textname' value='textvalue' />

<hr />

attributes = sets other attributes of the input tag.

     jText('textname','textvalue', jAt('style','width:200px;'))
     
Generates the following html:

    <input type='text' id='textname' name='textname' value='textvalue' style='width:200px;' />

Preview:

<input type='text' id='textname' name='textname' value='textvalue' style='width:200px;' />


