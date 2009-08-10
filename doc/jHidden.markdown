# jHidden

jHidden is a method that will return a hidden html tag.

## jHidden(name, value)

name - sets both the id and name attribute of the input tag

    jHidden('textname')
    
Generates the following html:
    
    <input type='hidden' id='textname' name='textname' />
    
value - sets the value of the input tag to pre-populate the form.

     jHidden('textname','textvalue')
     
Generates the following html:

     <input type='hidden' id='textname' name='textname' value='textvalue' />
