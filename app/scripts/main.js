'use strict';


// Adaptive Insights #4 (recursion)
function asteriskString (string) {

	var firstLetter = string.charAt(0) + "*";
	var n = string.length;
	return n > 1 ? firstLetter + asteriskString(string.substring(1)) : string.charAt(0);
}


// Upsight #1 (recursion)
function validateLogic(stringArg) {
	var lowercaseLtrs = ['a','b','c','d','e','f','g','h','i','j'];
	var uppercaseLtrs = ['N', 'L', 'Q', 'R'];
  	var stringLength = stringArg.length;

  	if (stringLength === 1) {
	    if (lowercaseLtrs.indexOf(stringArg) > -1) {
	      return true;
	    } else {
		  return false;
	    }
	}

	if (stringArg.charAt(0) === 'Z') {
		return validateLogic(stringArg.substring(1));
	} else if (!(uppercaseLtrs.indexOf(stringArg.charAt(0)) > -1 )) {
		return false;
	}

	// for (var i = 0; (i < (stringLength - 1)) && (i < 4); i++) {
	for (var i = 0; i < (stringLength - 1); i++) {
		if (validateLogic(stringArg.substr(1, 1+i)) && validateLogic(stringArg.substr(2+i))) {
			return true;
		}
	}
	// return false;
	
}

// function validateString(stringArg) {
// 	  // var stringArg = this.get('stringArg');
// 	  var strings = stringArg.split(/\s+/);
// 	  var answer1 = $('#answer1');
// 	  answer1.html('');

// 	  // run validateString for each string
// 	  for (var i = 0; i < strings.length; i++) {
// 	  	var valid = "";
// 	  	if (validateLogic(strings[i])) {
// 	  		valid = "VALID";
// 	  	} else {
// 	  		valid = "INVALID";
// 	  	}
// 	 	console.log(strings[i] + " " + valid);
// 	 	answer1.append("<p>" + strings[i] + " " + valid + "</p>");
// 	  }
// }