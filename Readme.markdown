# jTag Javascript Library v 0.6.0

This library makes it really easy to generate html markup in javascript:

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
    
## Lab

Check out the jTag Lab at [jtag2html.heroku.com](http://jtag2html.heroku.com)


## Features

jTag Features

* Optional Params - tag, text, attributes
* Easy way to structure markup for read-ability
* Integrates with jQuery and should work with other libs
* FormHelpers for writting forms and fields
* Simple tables
* Simple Divs

## Support

If you find a bug or have a change request submit to [http://groups.google.com/group/jtag-support](http://groups.google.com/group/jtag-support)

## Contribution

If you have a patch please submit to [jtag@jackhq.com](mailto://jtag@jackhq.com)


