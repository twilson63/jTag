#jLabel

jLabel is a method that will return a html label tag.

## jLabel(for, text, [attributes])

for - the 'for' parameter must be the same name as the control the label is referencing.

text - the 'text' parameter is used to describe the control as well as if you want to nest the control for IE, then you would want to also include the control in the text parameter.

    jLabel('mytext', 'My Text:' + br + jText('mytext'))
    
Generates the following HTML:

    <label for='mytext'>My Text:<br /><input id='mytext' name='mytext' value='' type='text' ></input></label>

Preview:

<label for='mytext'>My Text:<br /><input id='mytext' name='mytext' value='' type='text' ></input></label>

<hr />    

## With Attributes

attributes - (optional) the 'attributes' parameter is used to pass additional attributes to the label markup, like class or style attributes.

    jLabel('mytext', 'My Text:' + br + jText('mytext'), jAt('class','required'))