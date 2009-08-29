---
layout: default
title: jTag Documentation jCheck
---

## jTag jCheck

[Return to Documentation](/jTag/docs/index.html)

The jTag jCheck function simplifies input tag of type checkbox.

### jCheck(name, [value], [attributes])

Basic Example:

    jCheck("user[remember_me]");
    
Output:

    <input id="user_remember_me" name="user[remember_me]" type="checkbox"></input>