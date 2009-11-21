/*
* jTag JavaScript Library v0.0.9
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
  jTag = window.jTag = function() {
    if(arguments.length == 1) {
      return jTag.fn.html(arguments[0]);
    } else {
      return jTag.fn;
    }
  };
  
  jTag.fn = jTag.prototype = {
    Markup: {
      div: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("div", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("div", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("div", arguments[0], arguments[1]);
        }
      },
      p: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("p", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("p", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("p", arguments[0], arguments[1]);
        }
      },
      h1: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("h1", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("h1", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("h1", arguments[0], arguments[1]);
        }
      },
      h2: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("h2", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("h2", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("h2", arguments[0], arguments[1]);
        }
      },
      h3: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("h3", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("h3", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("h3", arguments[0], arguments[1]);
        }
      },
      h4: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("h4", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("h4", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("h4", arguments[0], arguments[1]);
        }
      },
      h5: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("h5", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("h5", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("h5", arguments[0], arguments[1]);
        }
      },
      h6: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("h6", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("h6", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("h6", arguments[0], arguments[1]);
        }
      },
      span: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("span", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("span", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("span", arguments[0], arguments[1]);
        }
      },

      ul: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("ul", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("ul", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("ul", arguments[0], arguments[1]);
        }
      },
      li: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("li", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("li", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("li", arguments[0], arguments[1]);
        }
      },
      form: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("form", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("form", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("form", arguments[0], arguments[1]);
        }
      },
      input: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("input", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("input", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("input", arguments[0], arguments[1]);
        }
      },
      br: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("br", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("br", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("br", arguments[0], arguments[1]);
        }
      },
      hr: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("hr", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("hr", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("hr", arguments[0], arguments[1]);
        }
      },
      label: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("label", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("label", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("label", arguments[0], arguments[1]);
        }
      }, 
      table: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("table", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("table", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("table", arguments[0], arguments[1]);
        }
      }, 
      tr: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("tr", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("tr", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("tr", arguments[0], arguments[1]);
        }
      }, 
      td: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("td", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("td", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("td", arguments[0], arguments[1]);
        }
      }, 
      th: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("th", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("th", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("th", arguments[0], arguments[1]);
        }
      }, 
      thead: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("thead", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("thead", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("thead", arguments[0], arguments[1]);
        }
      }, 
      tbody: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("tbody", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("tbody", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("tbody", arguments[0], arguments[1]);
        }
      }, 
      a: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("a", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("a", {}, arguments[0]);          
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("a", arguments[0], arguments[1]);
        }
      },
      img: function() {
        if ((arguments.length == 1) && (typeof(arguments[0]) == "object")) {
          jTag.fn.Markup.tag("img", arguments[0], "");
        } else if (arguments.length == 1) {
          jTag.fn.Markup.tag("img", {}, arguments[0]);
        } else if (arguments.length == 2) {
          jTag.fn.Markup.tag("img", arguments[0], arguments[1]);
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
          jTag.fn.body += "<tag attributes>?</tag>".replace(/tag/g, tag).replace(/attributes/, attr_str).replace(/\?/, body);
        } else if (typeof(body) == "function") {          
          var current_body = jTag.fn.body;
          jTag.fn.body = "";          
          jTag.fn.html(body);
          var new_body = jTag.fn.body;
          jTag.fn.body = ""; 
          jTag.fn.body += current_body + "<tag attributes>?</tag>".replace(/tag/g, tag).replace(/attributes/, attr_str).replace(/\?/, new_body);
        }        
      }
    },
    html: function(fn) {
      jTag.fn.body = "";
      var contents = String(fn).match(/^[^\{]*{((.*\n*)*)}/m)[1];
      //var fn = new Function(
      //  "with (jTag().Markup) { " + contents + " }"
      //);
      eval("with (jTag().Markup) { " + contents + " }");
      return jTag.fn.body;
    },
    body: ""
  }
  

})();