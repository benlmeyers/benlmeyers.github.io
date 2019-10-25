/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*create a function that searches the 'animals' array, it should take
2 parameters, 1 string representing the name of the animal, and the animals
array.  the function should return the object of the animal, if that animal
exists, or 'null' if it doesn't. */
function search(animals, name) {
   for (var i = 0; i < animals.length - 1; i++){
       if (name === animals[i].name ) {
           return animals[i];
       }     
   } 
       return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Write a function called replace that takes 3 parameters, our array of
animals, the name of an animal on which to perform a search, and an object
that represents the replacement animal. If an animal with that name exists
within the `animals` Array, replace it's entire Object with the replacement 
Object. Otherwise, do nothing. */

function replace(animals, name, replacement) {
    for (var j = 0; j < animals.length - 1; j++) {
        if (name === animals[j].name) {
            return animals.splice(animals[j], 1, replacement);        
        }
    }   
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Write a function called remove, that takes 2 parameters. Our array of
animals, and the name of an animal to search for. If an animal with that
name exists in our array, remove it. */

function remove(animals, name) {
    for (var k = 0; k < animals.length - 1; k++) {
        if (name === animals[k].name) {
            return animals.splice(animals[k]);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Write a function called add that takes 2 parameters, our animals array,
and an object representing an entirely new animal. This function should 
check that animal has a name > 0, the name is unique, and has a species > 0.
This function should also add the animal to our array of animals, only if 
all other conditions pass. */

function add(animals, animal) {
    var duplicate;
    if (animal.name.length > 0 && animal.species.length > 0) {
       for (let z = 0; z < animals.length; z++) {
    if (animal.name === animals[z].name) {
        duplicate = animal;
    } 
} if (typeof duplicate === 'undefined') {
        return animals.push(animal);
}
}
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
