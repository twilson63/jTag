---
layout: default
title: jTag Documentation jLabel
---

## jTag jLabel

[Return to Documentation](/jTag/docs/index.html)

The jTag jLabel function simplifies input tag of label.

### jLabel(name, content, [attributes])

Basic Example:

    jLabel("user_name", "User" + jText("user[name]"));
    
Output:

    <label for="user_name">User<input id="user_name" name="user[name]" type="text"></input></label>
    
    