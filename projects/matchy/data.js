/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object.
var animal = {};
//using dot notation add a key/value pair for species/any animal
animal.species = 'Tiger';
//using bracket notation add a key/value pair for name/animal's name
animal["name"] = "Rufus";
//using either notation, give it an array of noises for a value called noises
animal.noises = [];

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named noises, and assign it to an empty array
var noises = [];
//using bracket notation add a noise your animal might make
noises[0] = 'Rawr';
//use push to add another noise to the end of noises
noises.push("Loud Meow");
//using unshift add another noise to the front of the noises array
noises.unshift("Growl");
/*using bracket syntax add another noise to the end of the array, use 
.length so it works no matter how many are in there */
noises[noises.length] = "purrrr";
 
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using bracket notation, assign the key of 'noises' to our new array
animal["noises"] = noises;
//using any notation add another noise to the noise property on animal
animal.noises[noises.length] = "I'm hungry!";
//log to the console the object of animal


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
//What are the different ways you can access properties on objects?
//dot notation, bracket notation, for in loops
//What are the different ways of accessing elements on  arrays?
//bracket notation
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */
//done!

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animals and assign it to an empty array
var animals = [];
//use the push method to add animal to animals
animals.push(animal);

/*Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }` */
 var duck = {
     species: 'duck',
     name: 'Jerome',
     noises: ['quack', 'honk', 'sneeze', 'woosh']
 };
//push Jerome the duck to animals
animals.push(duck);

//create 2 more animals, with a species, a name, and at least 2 sounds
var elephant = {
    species: 'elephant',
    name: 'Sheena',
    noises: ['bwaaap', 'trample']
};
var dog = {
    species: 'dog',
    name: 'Freddy',
    noises: ['bark', 'growl']
};
//add each one of our new animals to the animals array
animals.push(elephant);
animals.push(dog);
//log to the console the animals array, and the length of the animals array
console.log(animals);
console.log(animals.length);
//how's it look?

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*choose a data structure that would be best for a friends list, that we are about to 
create, and explain why you chose this kind in a comment. */
/*I think an array would be perfect, because it's just a list, so an object would be too
complicated for this task.  And, I don't know any other kinds of data structures. */
//create a variable called friends, and assign it to an array
var friends = [];
//read about Math.random() on the MDN
/*create a function called getRandom that takes our animals array and returns
the index of a random element using Math.random. Using a random index from this
function that you just created, get a random animal and add its `name` to `friends`. */
function getRandom(animals) {
    var num = Math.floor(Math.random() * 4);
    return friends.push(animals[num]);
}

animals[2].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
