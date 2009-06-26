# jTag Javascript Library

This library makes it really easy to generate markup in javascript:

    document.write(
      jTag(h1, "Welcome to jTag") +
      jTag(p, 
        "jTag Features" +
        jTag(ul,
          jTag(li, "Optional Params - tag, text, attributes") +
          jTag(li, "Easy way to structure markup for readability") +
          jTag(li, "Integrates with jQuery and should work with other libs") +
          jTag(li, "FormHelpers for writting forms and fields")
        , jAttribute("id","feature_list"))
      )
    );
    
[output]

# Welcome to jTag

jTag Features

* Optional Params - tag, text, attributes
* Easy way to structure markup for read-ability
* Integrates with jQuery and should work with other libs
* FormHelpers for writting forms and fields

