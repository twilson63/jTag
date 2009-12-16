/*
* jTag2 JavaScript Library v0.1.0
* http://jtag.jackhq.com
*
* Copyright (c) 2009 Jack Russell Software Company, LLC
* Licensed under the MIT license.
* http://github.com/twilson63/pickle/License
*
*/
(function() {

  var 
  window = this, 
  jTag2 = window.jTag2 = function() {
    if(arguments.length == 1) {
      return jTag2.fn.html(arguments[0]);
    } else if (arguments.length == 3 && arguments[0] == "set") {
      return jTag2.fn.set(arguments[1], arguments[2]);      
    } else {
      return jTag2.fn;
    }
  };
  
  jTag2.fn = jTag2.prototype = {
    Markup: {
      div: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("div", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("div", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("div", arguments[0], arguments[1]);
        }
      },
      p: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("p", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("p", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("p", arguments[0], arguments[1]);
        }
      },
      h1: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("h1", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("h1", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("h1", arguments[0], arguments[1]);
        }
      },
      h2: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("h2", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("h2", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("h2", arguments[0], arguments[1]);
        }
      },
      h3: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("h3", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("h3", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("h3", arguments[0], arguments[1]);
        }
      },
      h4: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("h4", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("h4", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("h4", arguments[0], arguments[1]);
        }
      },
      h5: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("h5", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("h5", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("h5", arguments[0], arguments[1]);
        }
      },
      h6: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("h6", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("h6", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("h6", arguments[0], arguments[1]);
        }
      },
      span: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("span", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("span", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("span", arguments[0], arguments[1]);
        }
      },

      ul: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("ul", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("ul", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("ul", arguments[0], arguments[1]);
        }
      },
      li: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("li", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("li", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("li", arguments[0], arguments[1]);
        }
      },
      form: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("form", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("form", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("form", arguments[0], arguments[1]);
        }
      },
      input: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("input", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("input", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("input", arguments[0], arguments[1]);
        }
      },
      textarea: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("textarea", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("textarea", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("textarea", arguments[0], arguments[1]);
        }
      },
      br: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("br", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("br", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("br", arguments[0], arguments[1]);
        }
      },
      hr: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("hr", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("hr", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("hr", arguments[0], arguments[1]);
        }
      },
      label: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("label", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("label", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("label", arguments[0], arguments[1]);
        }
      }, 
      table: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("table", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("table", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("table", arguments[0], arguments[1]);
        }
      }, 
      tr: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("tr", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("tr", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("tr", arguments[0], arguments[1]);
        }
      }, 
      td: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("td", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("td", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("td", arguments[0], arguments[1]);
        }
      }, 
      th: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("th", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("th", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("th", arguments[0], arguments[1]);
        }
      }, 
      thead: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("thead", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("thead", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("thead", arguments[0], arguments[1]);
        }
      }, 
      tbody: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("tbody", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("tbody", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("tbody", arguments[0], arguments[1]);
        }
      }, 
      a: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("a", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("a", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("a", arguments[0], arguments[1]);
        }
      },
      img: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("img", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("img", {}, arguments[0]);
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("img", arguments[0], arguments[1]);
        }
      },
      select: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("select", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("select", {}, arguments[0]);
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("select", arguments[0], arguments[1]);
        }
      },
      option: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag2.fn.Markup.tag("option", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag2.fn.Markup.tag("option", {}, arguments[0]);
        } else if (arguments.length == 2) {
          jTag2.fn.Markup.tag("option", arguments[0], arguments[1]);
        }
      },

      tag: function(tag, attributes, body) {
        var attr_str = "";
        if (typeof(attributes) == "object") {
          for(k in attributes) {
            attr_str += k + '="' + attributes[k] + '" ';
          }
        } else {
          attr_str = attributes;
        }

        if(typeof(body) == "string") {
          jTag2.fn.body += "<tag attributes>?</tag>".replace(/tag/g, tag).replace(/attributes/, attr_str).replace(/\?/, body);
        } else if (typeof(body) == "function") {          
          var current_body = jTag2.fn.body;
          jTag2.fn.body = "";          
          jTag2.fn.html(body);
          var new_body = jTag2.fn.body;
          jTag2.fn.body = ""; 
          jTag2.fn.body += current_body + "<tag attributes>?</tag>".replace(/tag/g, tag).replace(/attributes/, attr_str).replace(/\?/, new_body);
        }        
      }
    },
    html: function(fn) {
      jTag2.fn.body = "";
      var contents = String(fn).match(/^[^\{]*{((.*\n*)*)}/m)[1];
      eval("with (jTag2().Markup) { " + contents + " }");
      return jTag2.fn.body;
    },
    set: function(name, value) {
      jTag2.fn.Markup[name] = value;
      return jTag2.fn;
    },
    body: ""
  }
})();