# jTag2 Javascript Library v 0.1.1

jTag2 is a javascript dsl that generates html markup.
    
    jTag2('set', 'title', "jTag2");
    
    document.write(
      jTag2(function (){
        
        h1({ style: "color:blue;" }, "Welcome to " + title);
        ul({ style: "text-decoration:none;" }, function() {
          for(i = 0; i < 10; i++) {
            li("Line: " + i);
          }
        })
      });
    );
    
## Documentation

    [tag]([attribute object | content string | function])
    
---
    
    Each jTag2 element can have the following optional parameters:
      
      * Attribute Object, this is a javascript object that contains elements that represent html attributes for the given html element specified.
      * Content String, if you have text information you can include a content string.
      * Function, if this tag has one or more child tags, then you create your markup children by specifing a function and adding more jTag2 markup elements within the function.
      
      

        
## Lab

Check out the jTag2 Lab at [jtag2.jackhq.com](http://jtag2.jackhq.com)


## Features

jTag2 Features

* Javascript DSL to create HTML
* Set Method for placing instance objects in the jTag2 scope
* Easy to define attributes and content.

## Support

[http://twitter.com/jtag2](http://twitter.com/jtag2)

## Contribution

If you have a patch please submit to [jtag@jackhq.com](mailto://jtag@jackhq.com)


