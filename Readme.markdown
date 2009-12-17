# jTag2 Javascript Library v 0.1.1

jTag2 is a javascript dsl that generates html markup.
    
    jTag2('set', 'title', "jTag2");
    
    document.write(
      jTag2(function (){
        
        h1("Welcome to " + title);
        ul(function() {
          for(i = 0; i < 10; i++) {
            li("Line: " + i);
          }
        })
      });
    );
    
        
## Lab

Check out the jTag2 Lab at [jtag2.jackhq.com](http://jtag2.jackhq.com)


## Features

jTag2 Features

* Javascript DSL to create HTML
* Set Method for placing instance objects in the jTag2 scope

## Support

[http://twitter.com/jtag2](http://twitter.com/jtag2)

## Contribution

If you have a patch please submit to [jtag@jackhq.com](mailto://jtag@jackhq.com)


