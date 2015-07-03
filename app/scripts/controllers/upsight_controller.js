(function(){
'use strict';


	App.UpsightController = Ember.Controller.extend({

		// validate: function(stringArg) {
		// 	var lowercaseLtrs = ['a','b','c','d','e','f','g','h','i','j'];
		// 	var uppercaseLtrs = ['N', 'L', 'Q', 'R'];
		//   	var stringLength = stringArg.length;

		//   	if (stringLength === 1) {
		// 	    if (lowercaseLtrs.indexOf(stringArg) > -1) {
		// 	      return true;
		// 	    } else {
		// 		  return false;
		// 	    }
		// 	}

		// 	if (stringArg.charAt(0) === 'Z') {
		// 		return this.validate(stringArg.substring(1));
		// 	} else if (!(uppercaseLtrs.indexOf(stringArg.charAt(0)) > -1 )) {
		// 		return false;
		// 	}

		// 	for (var i = 0; i < (stringLength - 1); i++) {

		// 		if (validate(stringArg.substr(1, 1+i)) && validate(stringArg.substr(2+i))) {
		// 			return true;
		// 		}
		// 	}
		// 	// return false;
	
		// },

		actions: {

			showCode: function() {
				$('.codeConsole').html('<img src="images/code/upsightCode.png">');
			},

			validateString: function(stringArg) {
				  stringArg = stringArg.replace(/\\n/g, " ");
				  stringArg = stringArg.replace(/\"/g, "");

				  var strings = stringArg.split(/\s+/);
				  var answer1 = $('#answer1');
				  answer1.html('');

				  // run validateString for each string
				  for (var i = 0; i < strings.length; i++) {
				  	var valid = "";
				  	if (validateLogic(strings[i])) {
				  		valid = "VALID";
				  	} else {
				  		valid = "INVALID";
				  	}
				 	console.log(strings[i] + " " + valid);
				 	answer1.append("<p>" + strings[i] + " " + valid + "</p>");
				  }
			}



			// vS: function(){
			// 	validateString();
			// }



			// validateString: function(){

			// 	var answer1 = $('#answer1');
			// 	answer1.html('');

			// 	var stringArg = this.get('stringArg');
			// 	var strings = stringArg.split(/\s+/);


			// 	// run validateString for each string
			// 	for (var i = 0; i < strings.length; i++) {
			// 		var valid = "";
			// 		console.log(this);
			// 		if (this.validate(strings[i])) {
			// 			valid = "VALID";
			// 		} else {
			// 			valid = "INVALID";
			// 		}
			// 		// console.log(strings[i] + " " + valid);
			// 		answer1.append("<p>" + strings[i] + " " + valid + "</p>");
			// 	}

			// },

		}

	});


})();