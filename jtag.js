/*
* Tag JavaScript Library v0.2.0
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
h4 = "<h4>?</h4>",
h5 = "<h5>?</h5>",
h6 = "<h6>?</h6>",
p = "<p>?</p>",
br = "<br />",
hr = "<hr />",
ul = "<ul>?</ul>",
li = "<li>?</li>",
a = "<a>?</a>",
div = "<div>?</div>",
span = "<span>?</span>",
input = "<input>?</input>",
textarea = "<textarea>?</textarea>",
select = "<select>?</select>",
option = "<option>?</option>",
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
    jInput = window.jInput = function( name, value, type, args ) {
    	return jTag(input, "", 
    	  [ 
    	  jAttribute("id", type == "radio" ? [name,value].join('_') : name),
    	  jAttribute("name", name), 
    	  jAttribute("value", value || ""), 
    	  jAttribute("type", type),
    	  args || ""
    	  ].join(' '));

    },
    _jText = window.jText,
    jText = window.jText = function( name, value ) {
      return jInput(name, value, "text");
    },
    _jLabel = window.jLabel,
    jLabel = window.jLabel = function( name, value, args ) {
      return jTag(label, value, jAttribute("for", name) + args + "");
    };
    _jHidden = window.jHidden,
    jHidden = window.jHidden = function( name, value ) {
      return jInput(name, value, "hidden");
    };
    _jRadio = window.jRadio,
    jRadio = window.jRadio = function( name, value, args ) {
      return jInput(name, value, "radio", args);
    };
    _jArea = window.jArea,
    jArea = window.jArea = function( name, value, attr ) {
      return jTag(textarea, value || "", [attr || "", jAttribute("id", name)].join(' ') );
    };
    _jCheck = window.jCheck,
    jCheck = window.jCheck = function( name, value, args ) {
      return jInput(name, value, "checkbox", args)
    };

    _jSelect = window.jSelect,
    jSelect = window.jSelect = function( name, values, args ) {
      options = "";
      for(i = 0; i < values.length; i++) {
        if(values[i].id && values[i].name) {
            options += jTag(option, values[i].name, jAttribute("value", values[i].id));
        } else {
            options += jTag(option, values[i], jAttribute("value", values[i]));
            
        }
      }
      alert(options);
      return jTag(select, options, [args || "", jAttribute("id", name)].join(' '));
    };

})();
