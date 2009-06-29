/*
* Tag JavaScript Library v0.1.0
* http://tag.jackhq.com
*
* Copyright (c) 2009 Jack Russell Software Company, LLC
* Licensed under the MIT license.
* http://github.com/twilson63/jtag/License
*
* Date: 2009-06-24 23:43:21 -0500 (Wed, 24 June 2009)
* Revision: 00003
*/


// Common Tags
var 

h1 = "<h1>?</h1>",
h2 = "<h2>?</h2>",
h3 = "<h3>?</h3>",
p = "<p>?</p>",
br = "<br />",
ul = "<ul>?</ul>",
li = "<li>?</li>",
a = "<a>?</a>",
div = "<div>?</div>",
input = "<input>?</input>",
label = "<label>?</label>",
form = "<form>?</form>",
table = "<table>?</table>",
thead = "<thead>?</thead>",
tr = "<tr>?</tr>",
tbody = "<tbody>?</tbody>",
td = "<td>?</td>",
th = "<th>?</th>",
space = " ";

(function(){
  var 
    window = this,
    undefined,
    _jTag = window.jTag,

    jTag = window.jTag = function( tag, text, args ) {
      return jTag.fn.init( tag, text, args )
    };

  jTag.fn = jTag.prototype = {
    init: function( tag, text, args ) {
      if (args) {
        val = tag.replace(/>\?/, " " + args + ">\?")
        val = val.replace(/\?/, text);
      } else {
        val = tag.replace(/\?/, text);
      }
      return val;
    }
  }

  var 
    _jAttribute = window.jAttribute,
    jAttribute = window.jAttribute = function( attr, value ) {
      return "a='b'".replace(/a/, attr).replace(/b/, value); 
    },

    _jInput = window.jInput,
    jInput = window.jInput = function( name, value, type ) {
    	return jTag(input, "", 
    	  [jAttribute("id", name), 
    	  jAttribute("value", value || ""), 
    	  jAttribute("type", type)].join(' '));

    },
    _jText = window.jText,
    jText = window.jText = function( name, value ) {
      return jInput(name, value, "text");
    },
    _jLabel = window.jLabel,
    jLabel = window.jLabel = function( name, value ) {
      return jTag(label, value, jAttribute("for", name));
    };
    _jHidden = window.jHidden,
    jHidden = window.jHidden = function( name, value ) {
      return jInput(name, value, "hidden");
    };
    _jArea = window.jArea,
    jArea = window.jArea = function( name, value, attr ) {
      return jTag(textarea, value || "", [attr || "", jAttribute("id", name)].join(' ') );
    };
    
})();
