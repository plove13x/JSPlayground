/////// ALEX @ MAINZ-BRADY: Palo Alto opportunity; 02-JUNE-2015



// Problem 1
// Write a method which given two integers, returns the integer that is closest to 1000. 
// test input: (4, 2000) returns 4

function thouCloser (int1, int2) {
	// var firstDiff = Math.abs(1000 - int1);
	// var secondDiff = Math.abs(1000 - int2);
	// if (Math.min(firstDiff, secondDiff) === firstDiff) {
	// 	return int1;
	// } else {
	// 	return int2;
	// }


// refactored to


	if (Math.abs(1000 - int1) <= Math.abs(1000 - int2)) {
		return int1;
	} else {
		return int2;
	}
}


// Problem 2
// Write a method which given a string, returns a string where every character in the original is doubled. For example, given the string "xyz", return the string "xxyyzz".
// test input: ("patrick") returns "ppaattrriicckk"

function doubleChar (string) {
	var doubleString = '';
	for (i = 0; i < string.length; i++) {
		var letter = string.charAt(i);
		var doubleString = doubleString + letter + letter;
	}
	return doubleString;
}


// Problem 3
// Write a method which takes an array of integers.  The method should return true if there is a way to split the array in two so that the sum of the numbers on one side of the split equals the sum of the numbers on the other side.  
// test input: ([0,1,3,5,0,9]) returns true

function equalArraySplit (array) {
	for (i = 1; i < array.length; i++) {
		var firstHalf = array.slice(0, i);
		var firstHalfTotal = firstHalf.reduce(function(a, b) {
			return a + b;
		});

		var secondHalf = array.slice(i, array.length);
		var secondHalfTotal = secondHalf.reduce(function(a, b) {
			return a + b;
		});

		if (firstHalfTotal === secondHalfTotal) {
			return true;
		}
	}
}


// Problem 4
// Write a method which given a string, returns a string with an asterisk inserted between every character in the original.  Use recursion in your solution.
// test input: "patrick" returns "p*a*t*r*i*c*k"

function asteriskString (string) {
	// recursion!
	var firstLetter = string.charAt(0) + "*";
	var n = string.length;

	// if (n > 1) {
	// 	return firstLetter + asteriskString(string.substring(1));
	// } else {
	// 	return string.charAt(0);
	// }


// refactored to


	return n > 1 ? firstLetter + asteriskString(string.substring(1)) : string.charAt(0);
}
