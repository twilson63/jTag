---
layout: default
title: jTag Documentation jDiv
---

## jTag jDiv

[Return to Documentation](/jTag/docs/index.html)

The jTag jDiv function simplifies adding a div tag and its attributes.

### jDiv([id],[classes], content, [attributes])

Basic Example:

    jDiv("Hello");
    
Output:

    <div>Hello</div>
    
Div with id:

    jDiv("my_id", "Hello");
    
Output:

    <div id="my_id">Hello</div>
    
Div tag with classes Example:

    jDiv(['class1','class2'], "My Content");
    
Output:

    <div class='class1 class2'>My Content</div>
    
Div tag with id and classes Example:

    jDiv("mydivid", ['class1','class2'], "My Content");
    
Output:

    <div id='mydivid' class='class1 class2'>My Content</div>


    
    
