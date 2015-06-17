(function(){
'use strict';


	App.AdaptiveInsightsController = Ember.Controller.extend({

		actions: {

			thouCloser: function(){

				var int1 = this.get('int1');
				var int2 = this.get('int2');
				var answer1 = $('#answer1');

				if (Math.abs(1000 - int1) <= Math.abs(1000 - int2)) {
					answer1.html(int1);
					return int1;
				} else {
					answer1.html(int2);
					return int2;
				}
			},

			doubleChar: function() {

				var string = this.get('string');
				var answer2 = $('#answer2');

				var doubleString = '';
				for (var i = 0; i < string.length; i++) {
					var letter = string.charAt(i);
					var doubleString = doubleString + letter + letter;
				}
				answer2.html(doubleString);
				return doubleString;
			},

			equalArraySplit: function() {

				var eASArray = this.get('eASArray');
				var answer3 = $('#answer3');

				var convertToNumArray = JSON.parse("[" + eASArray + "]");
				var eASArray = convertToNumArray[0];

				for (var i = 1; i < eASArray.length; i++) {
					var firstHalf = eASArray.slice(0, i);
					console.log(firstHalf);
					var firstHalfTotal = firstHalf.reduce(function(a, b) {
						return a + b;
					});

					var secondHalf = eASArray.slice(i, eASArray.length);
					var secondHalfTotal = secondHalf.reduce(function(a, b) {
						return a + b;
					});

					if (firstHalfTotal === secondHalfTotal) {
						answer3.html('Returns True!');
						// return true;
					} else {
						answer3.html('Not yet bud');
					}
				}				
			},

			asteriskString: function() {

				var aSString = this.get('aSString');
				var answer4 = $('#answer4');

				var firstLetter = aSString.charAt(0) + "*";
				var n = aSString.length;

				var returnValue4 = n > 1 ? firstLetter + asteriskString(aSString.substring(1)) : aSString.charAt(0);
				answer4.html(returnValue4);
				// return n > 1 ? firstLetter + asteriskString(aSString.substring(1)) : aSString.charAt(0);

			}

		
		}

	});


})();