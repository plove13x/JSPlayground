(function(){
'use strict';


	App.AdaptiveInsightsController = Ember.Controller.extend({

		actions: {

			showCode: function(){
				var codeNum = event.target.getAttribute("data-codeNum");
				console.log(codeNum);
				$('.codeConsole').html('<img src="images/code/adaptiveInsightsCode' + codeNum + '.png">');
			},

			// pick up here combining toggleCode with sipree's showCode

			toggleCode: function(){
				var codeNum = event.target.getAttribute("data-codeNum");

				var code = $('.code' + codeNum); 
				var btn = $('.code' + codeNum + 'Btn');

				code.toggle();
				
				if (!this.isShowing) {
					this.isShowing = true;
					btn.html('Hide Code');
				} else {
					this.isShowing = false;
					btn.html('Show Code');
				}

			},

			thouCloser: function(){

				var int1 = this.get('int1');
				var int2 = this.get('int2');
				this.set('int1', '');
				this.set('int2', '');
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
				console.log(eASArray);

				var canSplit = false;
				for (var i = 1; i < eASArray.length; i++) {
					var firstHalf = eASArray.slice(0, i);
					var firstHalfTotal = firstHalf.reduce(function(a, b) {
						return a + b;
					});

					var secondHalf = eASArray.slice(i, eASArray.length);
					var secondHalfTotal = secondHalf.reduce(function(a, b) {
						return a + b;
					});

					console.log(firstHalfTotal, secondHalfTotal);

					if (firstHalfTotal === secondHalfTotal) {
						canSplit = true;
					} 
				}
				// this.set('eASArray', "");
				if (!canSplit) {
					answer3.html('false');
					// return false;
				} else {
					answer3.html('true');
					// return true;
				}				
			},

			aS: function() {
				var aSString = this.get('aSString');
				var answer4 = $('#answer4');
				answer4.html(asteriskString(aSString));
			}

		}

	});


})();