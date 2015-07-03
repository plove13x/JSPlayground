(function(){
'use strict';


	App.SipreeController = Ember.Controller.extend({

		actions: {

			showCode: function() {
				$('.codeConsole').html('<img src="images/code/sipreeCode.png">');
				// maybe next have the button text node or whatever say show question again...
			},

			sipreeSolution: function() {

				var answer1 = $('#answer1');
				var A = this.get('sipreeArray');
				var sipreeArray = JSON.parse("[" + A + "]");
				var A = sipreeArray[0];
				console.log(A);


			    var returnValue;

			    A.splice(0,1);
			    A.splice((A.length-1),1);

			    var sortedArray=A.slice();
			    sortedArray.sort(function(a,b){return a-b});
			    var lowestNumber = sortedArray[0];
			    var idealAnswer = lowestNumber + sortedArray[1];
			    var secondAnswer = lowestNumber + sortedArray[2];

			    var indexOfLowest = A.indexOf(lowestNumber);
			    var completed = false;

			    if(lowestNumber === sortedArray[1]) {
			        var testArray = [];
			        for (var i=0; i<A.length; i++) {
			            if (A[i] === lowestNumber) {
			                testArray.push(i);
			            }
			        }

			        for (var j=1; j<testArray.length; j++) {
			            if ((testArray[j] - testArray[0]) > 1) {
			                returnValue = idealAnswer;
			                completed = true;    
			            }
			        }
			         
			        if (!completed) {
			            returnValue = secondAnswer;
			        }           
			    } else {
			        if (Math.abs(A.indexOf(sortedArray[1]) - indexOfLowest) > 1) {
			            returnValue = idealAnswer;
			        } else {
			            returnValue = secondAnswer;
			        }
			    }
			    
			    answer1.html(returnValue);
			    return returnValue;
			}

		}

	});


})();