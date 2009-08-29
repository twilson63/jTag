---
layout: default
title: jTag
---

#### What

jTag is a javascript library makes generating html markup a breeze.  

#### Why

We need a way to use javascript to inject a lot of html in our applications.  

    document.write("<p>Some Paragraph</p>");
    
Just was not going to work for us, from a maintainable standpoint, we looked as some of the javascript markup parsers as well, and just could not find one that would work for us.  So we came up with jTag a lightweight library that allows us to generate markup in javascript.  This allows us virtually eliminate markup parsing errors when we decide to inject html via javascript.  For example, appending a row to the end of a table.  Or dynamically generating html for a form.  Since all jTag objects return strings, you can format the functions to be very readable as well.

    jDiv('content',
      jTag('h1', "Lorem Ipsum") +
      jTag('p', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt odio at mauris elementum sed commodo lacus mollis. Phasellus varius neque nec purus ultricies tempus. Nunc semper urna tincidunt arcu porttitor sed egestas velit pellentesque. Curabitur mauris ipsum, rhoncus a pulvinar dignissim, mollis nec elit. Praesent pharetra tincidunt lacus, eget feugiat nisi porttitor vel.", 
        jAt('style','font-size:3em;color:green;')
      ) +
      jTag('p', "Phasellus pellentesque porttitor mauris eget semper. Nunc libero ante, egestas at eleifend et, venenatis ac risus. Aenean lectus arcu, rhoncus vehicula luctus non, dignissim ut tortor. Nulla tincidunt orci malesuada lorem laoreet egestas. Ut volutpat rutrum tristique. Mauris sagittis quam ut sem semper ac sollicitudin lectus dignissim. Proin luctus rhoncus interdum. Sed tristique sodales sapien, eget ornare est lacinia quis.",
        jAt('style','font-size:2em;color:blue;')
      )
    );
    
HTML Output:


#### Usage

    document.write(
      jDiv("mydiv", 
        jTag(p, "Hello From jTag")
      )
    );

Creates:

    <div id="mydiv">
      <p>Hello From jTag</p>
    </div>

#### Installing

#### Bugs/Feature Requests

#### Contact

