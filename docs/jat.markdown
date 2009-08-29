---
layout: default
title: jTag Documentation jAt or jAttribute
---

## jTag jAt or jAttribute

[Return to Documentation](/jTag/docs/index.html)

The jTag jAt function simplifies adding attributes to a tag.

### jAt(name, value)

Basic Example:

    jTag("p","Lorem IpSum", jAt('style','color:green;'));
    
Output:

    <p style='color:green;'>Lorem IpSum</p>
