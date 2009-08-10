# jAt or jAttribute

This function will return a name=value pair that can be embedded in a html tag as an attribute.

## jAt(name, value)

You can easily combine attributes on any jTag markup method.

    jTag(p, 'Hello World', [jAt('class','myclass'),jAt('style','color:#c5c5c5;')].join(' '))
    
Generate HTML

    <p class='myclass' style='color:#c5c5c5;'>Hello World</p>