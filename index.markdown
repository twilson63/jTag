---
layout: default
title: jTag
---

#### What

jTag is a javascript library makes generating html markup a breeze.  

#### Why

We are increasingly using more and more javascript in our applications, and we needed a way to make it easy to manage the html injections that we need to accomplish from jQuery.  jTag makes it easy for us to keep our code clean and insert clean html, from our javascript.


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

