		poo: function(aSString) {

			// console.log (this.__ember_meta__.__proto__.source.constructor.__super__._actions);
			// console.log(this._actions.asteriskString);
			// console.log(aSString);
			// console.log(this.poo);

			// var aSString = this.get('aSString');
			(function(){
				var answer4 = $('#answer4');

				var firstLetter = aSString.charAt(0) + "*";
				console.log(firstLetter);
				var n = aSString.length;

				console.log(App.AdaptiveInsightsController.poo);
				var returnValue4 = n > 1 ? firstLetter + this.poo(aSString.substring(1)) : aSString.charAt(0);
				console.log(returnValue4);
				// return n > 1 ? firstLetter + asteriskString(aSString.substring(1)) : aSString.charAt(0);
			})();

			answer4.html(returnValue4);
		},






			asteriskString: function(aSString) {

				// var aSString = this.get('aSString');
				// var answer4 = $('#answer4');

				// console.log(aSString);
				this.poo(aSString);



				// var firstLetter = aSString.charAt(0) + "*";
				// var n = aSString.length;

				// // console.log(this.controllerFor("adaptiveInsights")._actions.asteriskString);

				// var returnValue4 = n > 1 ? firstLetter + this._actions.asteriskString(aSString.substring(1)) : aSString.charAt(0);
				// answer4.html(returnValue4);

				// console.log(returnValue4);
				// return n > 1 ? firstLetter + asteriskString(aSString.substring(1)) : aSString.charAt(0);

			}

// this.__ember_meta__.__proto__.source.constructor.__super__._actions