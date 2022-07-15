// Here's an array (a kind of JavaScript object!) with types of soup in it:
const typesOfSoup = [
"minestrone",
"tomato",
"chick 'n' noodle",
"butternut squash",
"french onion",
"miso",
"clam chowder",
"broccoli cheddar",
"split pea",
];

// Here's an array of cities in Canada:
const citiesInCanada = [
"Toronto",
"Winnipeg",
"Vancouver",
"Regina",
"Quebec City",
"Halifax",
"St. John's",
"Montreal",
"Edmonton",
"Ottawa",
"Iqaluit"
];

// We're going to practice writing some functions that perform different tasks for us. Remember, functions are blocks of code that get executed when we call that function.

// First, let's write a function declaration for a function called called myFunction().
// Start by writing the declaration of the function, with the actual contents in the {} curly brackets empty.
// Next, put something in there to see if it works! Write an alert that sends a message to the user on page load.

function myFunction() {
	alert(`You're doing a great job!`);
};

// Is the function doing what it's supposed to do? Why not? What do we have to write every time we want a function to execute? Write that code and see if you can get the alert to run.

myFunction();

// Coolcoolcool. Now let's see if we can pass an argument to a function. Write out a new function declaration for a function called sendAlert(). Define this function with a parameter, so that it can alert out whatever is passed to it

// Again, start by writing the declaration of the function, without any actual contents. Then, add the parameter into the round brackets, and the alert inside the function body.

function sendAlert(message) {
	alert(message);
};

// Now call the function two times, and each time pass in a different string as an argument to be alerted (an argument is the name for a value passed to a function - the parameter is a placeholder for that argument).

sendAlert(`The following is an important message.`);
sendAlert(`There is no question about it. You're killing it.`);


// Great!
// Next let's console.log() the two arrays that are written at the top of this file. The arrays are stored in variables, so try to log those variables - see that you get the arrays in your console!

console.log(typesOfSoup);
console.log(citiesInCanada);

// Good stuff. Now instead of calling our console.logs ourselves like this, let's put them in functions that will call them for us. Write two function expressions, one for a function called displaySoups() and one for a function called displayCities(). Place each console.log inside their respective functions. Use the function keyword to write these functions (rather than making them arrow functions).

const displaySoups = function() {
	console.log(typesOfSoup);
};

const displayCities = function() {
	console.log(citiesInCanada);
};

// Now you can call each function to make the code execute. You can do this here in the script file, or in the console; both will call the functions and execute the code inside of them. Try one or both.

displaySoups();
displayCities();

// Pretty awesome, but this could be more efficient. These two functions are performing basically the same actions, just with different values in each case. Instead, we could write just one function that can take in whatever information we give it, and do the same thing over and over. That's what parameters are for!

// Let's write a new function expression called displayList(). This time, let's also add a parameter when defining our function, and have the function console.log that parameter.

const displayList = function(infoToDisplay) {
	console.log(infoToDisplay);
};

// Now when we call this new function, it will sub in whatever value we give it for our parameter. Try it out by calling the function twice - once pass it our typesOfSoup array as an argument, then citiesInCanada. The function console.logs whatever we give it!

displayList(typesOfSoup);
displayList(citiesInCanada);

// The above is a great example of how we can use arguments and parameters in functions in order to make them more reusable.


// Let's write another function expression called randomNumber() that will return (not console.log!) a random number from 0 to 10. Look back in the notes for the Math methods that allow us to do this.

let randomNumber = function() {
	return Math.floor(Math.random() * 11);
};

// if you call the function inside of a console.log, the return of the function will display in the console. Try it out!

console.log(randomNumber());

// Now let's define a similar function called superRandomizer, but this time instead of hard-coding the number we multiply by, let's write it so that it can be passed any number as an argument to use as the multiplier that sets the range we're randomizing over. Write this new function below, with a parameter that is used in place of the number.
// BONUS: If you defined randomNumber() using the function keyword then try writing superRandomizer as an arrow function, or vice-versa!

superRandomizer = (num) => {
	return Math.floor(Math.random() * num);
};

// Now let's call the superRandomizer function inside of a console.log again, but remember that this time we need to pass it a number as an argument.

console.log(superRandomizer(100));



// You can also pass expressions as arguments. Let's try passing the built-in array property called .length into a function.

// Write a function expression called whatIsTheLength() that returns a string which reads "The length is ______", where the length of an array is a parameter used instead of the blank
// Pass the length of one of the arrays at the top of the file into the function call as an argument. You might have to do some googling to discover how to write out the .length property in order to pass it into the function.

const whatIsTheLength = (arrayLength) => {
	return `The length is ${arrayLength}`;
};

console.log(whatIsTheLength(typesOfSoup.length));

console.log(whatIsTheLength(citiesInCanada.length));	

// Amazing job! Now for an ADVANCED BONUS CHALLENGE, let's put it all together for one mighty finale: Write a function that returns a random soup or city from the array that is passed into it. To do this, you will need to use two new array tools - an index number and bracket notation.
// An index number indicates the position of an item in an array; arrays are zero-indexed, so the first item in the array is 0, the second is 1, and so on.
// Bracket notation uses square brackets to let us get an item out of an array, using the item's index number. So for example, if we wanted to get the first item in our citiesInCanada array (which is "Toronto"), we would write it as citiesInCanada[0] (again, it's a zero because it's the first item in the array, and arrays are zero-indexed; if we tried citiesInCanada[1], we would get the second item, "Winnipeg", instead).

// HINT: You can use the superRandomizer function we wrote earlier to retrieve a random index number you need.
// NOTE: This is is putting a lot together and using some new tools you're not used to, so don't feel bad if you can't get it all the way! Try to break it down into the smallest steps possible, write down what you can, and do your best! You can always ask for help when you can't get any further.

function displayRandomItem(array) {
	const index = superRandomizer(array.length);
	return `The random choice is ${array[index]}.`;
};

console.log(displayRandomItem(citiesInCanada));
console.log(displayRandomItem(typesOfSoup));
