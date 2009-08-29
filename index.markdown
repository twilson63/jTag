---
layout: default
title: jTag
---

#### What

jTag is a javascript library makes generating html markup a breeze.  

#### Why jTag

Are projects continue to require more usage of javascript and the need to inject HTML into the page dynamically.  Instead of making round trips to the server each time to request html that needed to be injected, we needed a way to write html in our javascript code.  The following:

    document.write("<p>Some Paragraph</p>");

Was not going to work!

1. It would create hard to detect typos and markup bugs
2. Using with data and other variables can create a mess.
3. We wanted our code to be as clear and as readable as possible.
  

#### Usage

    jDiv('content',
      jTag('h1', "Lorem Ipsum") +
      jTag('p', "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean tincidunt odio at mauris elementum sed commodo lacus mollis.
      Phasellus varius neque nec purus ultricies tempus. Nunc semper urna
      tincidunt arcu porttitor sed egestas velit pellentesque. Curabitur
      mauris ipsum, rhoncus a pulvinar dignissim, mollis nec elit.
      Praesent pharetra tincidunt lacus, eget feugiat nisi porttitor
      vel.", 
        jAt('style','font-size:3em;color:green;')
      ) +
      jTag('p', "Phasellus pellentesque porttitor mauris eget semper. Nunc
      libero ante, egestas at eleifend et, venenatis ac risus. Aenean
      lectus arcu, rhoncus vehicula luctus non, dignissim ut tortor. Nulla
      tincidunt orci malesuada lorem laoreet egestas. Ut volutpat rutrum
      tristique. Mauris sagittis quam ut sem semper ac sollicitudin lectus
      dignissim. Proin luctus rhoncus interdum. Sed tristique sodales
      sapien, eget ornare est lacinia quis.",
        jAt('style','font-size:2em;color:blue;')
      )
    );
    
HTML Output:
    <div id="content"><p style="font-size:3em;color:green">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean tincidunt odio at mauris elementum sed commodo lacus mollis.
    Phasellus varius neque nec purus ultricies tempus. Nunc semper urna
    tincidunt arcu porttitor sed egestas velit pellentesque. Curabitur
    mauris ipsum, rhoncus a pulvinar dignissim, mollis nec elit.
    Praesent pharetra tincidunt lacus, eget feugiat nisi porttitor
    vel.</p><p style="font-size:2em;color:blue;">Phasellus pellentesque porttitor mauris eget semper. Nunc
    libero ante, egestas at eleifend et, venenatis ac risus. Aenean
    lectus arcu, rhoncus vehicula luctus non, dignissim ut tortor. Nulla
    tincidunt orci malesuada lorem laoreet egestas. Ut volutpat rutrum
    tristique. Mauris sagittis quam ut sem semper ac sollicitudin lectus
    dignissim. Proin luctus rhoncus interdum. Sed tristique sodales
    sapien, eget ornare est lacinia quis.</p>
    

#### Installing

#### Bugs/Feature Requests

#### Contact

