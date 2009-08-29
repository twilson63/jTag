---
layout: default
title: jTag Documentation Core
---

## jTag Core

[Return to Documentation](/jTag/docs/index.html)

The jTag Core contains:

### jTag(tag, contents, attributes)

* tag parameter - is a string that contains a ?, jtag uses that ? to replace or embed the contents, also the string will need to contain one > symbol, so that jtag can place the attribute list in front of the > symbol.

For example: HTML

    <p style="color:green;">Hello World</p>

Using jTag Core:

    jTag("<p>?</p>", "Hello World", "style='color:green;'")
    
This is the base core method, with jTag we build on the core to reduce this statement.

Normal jTag:

    jTag("p", "Hello World", jAt('style','color:green;'))
    
Common jTags

    div, p, span, ul, li, input, label, textarea, table, tr, th, td, etc.

[Return to Documentation](/jTag/docs/index.html)
