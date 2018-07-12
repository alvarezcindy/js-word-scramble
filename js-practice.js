// Arrays
// (Note that each bullet point here is independent of the others.)

// Declare a variable greeting and assign to it a phrase.

let greeting = 'Howdy, cowperson!';

// Split a string into an array of characters (see the .split() method)

let arrGreeting = greeting.split(' ');

// Take an array of letters and merge them into a string (see the .join() method)

arrGreeting.join(' ');

// Select a random item from an array (Read up on Math.random() to figure out how to choose a random item from your array. JavaScript doesn’t have Python’s random.choice() function at the ready, so we get to do it ourselves!)

let words = ['hi', 'bye', 'yo', 'howdy', 'au revoir', 'adios'];
let index = Math.floor(Math.random() * words.length);
let word = words[index];

// Select two random items from an array and swap them

let index1 = Math.floor(Math.random() * words.length);
let word1 = words[index1];

let index2 = Math.floor(Math.random() * words.length);
let word2 = words[index2];

words[index2] = word1;
words[index1] = word2;

// Maps
// Create an empty map and assign it to the variable candy

const candy = new Map();

// Set five colors as keys in the map and flavors as the values, for instance “purple”
// could be “grape”.

candy.set('purple', 'grape')
	.set('red', 'cherry')
	.set('green', 'lime')
	.set('yellow', 'banana')
	.set('orange', 'orange');

// Iterate over the candy flavors to print “The x flavor is colored y.” for each

for (let [color, flavor] of candy.entries()) {
	console.log('The', flavor, 'flavor is colored', color );
}

// Get the value of a color from the map, and see what happens when you try getting a value
// of a color that doesn’t exist.

console.log(candy.get('green')); 
console.log(candy.get('blue')); // > undefined

// Functions
// Write a function that takes a color and the candy map. It should return the 
//flavor or if it’s not in the map, console log “Sorry, that color doesn’t have a flavor” and return nothing.
function getCandy(color) {
	if (candy.get(color)) {
		return candy.get(color);
	} else {
		console.log('Sorry, that color doesn\'t have a flavor.');
	}
}

console.log(getCandy('yellow'));
console.log(getCandy('teal'));

// Write a function that takes an array of colors and returns an array of the
//corresponding flavors. If the map doesn’t have the color, add null to the array.

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

const colors = ['purple', 'red', 'blue', 'green', 'magenta'];

function getColorFlavors(colors) {
	let flavors = [];
	for (let color of colors) {
		if (candy.get(color)) {
			flavors.push(candy.get(color));
		} else {
			flavors.push(null);
		}

	}
	return flavors;
}

console.log(getColorFlavors(colors));
