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

candy.set('purple', 'grape');
candy.set('red', 'cherry');
candy.set('green', 'lime');
candy.set('yellow', 'banana');
candy.set('orange', 'orange');

// Iterate over the candy flavors to print “The x flavor is colored y.” for each

for ([color, flavor] of candy.entries()) {
	console.log('The', flavor, 'flavor is colored', color );
}

// Get the value of a color from the map, and see what happens when you try getting a value
// of a color that doesn’t exist.