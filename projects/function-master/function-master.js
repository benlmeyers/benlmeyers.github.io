//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes an object, and returns it's values as an array
function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var newArray = Object.keys(object);
return newArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
let newArray = [];
for (let key in object) {
 if (typeof object[key] === "string") {   
    newArray.push(object[key]);
}
}    
    return newArray.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function arrayOrObject(collection) {
   if (Array.isArray(collection) === true) {
       return "array";
   } else {
       return "object";
   }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function capitalizeWord(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
function capitalizeAllWords(string) {
return string
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
string.charAt(0).toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function welcomeMessage(object) {
return "Welcome" + ' ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function profileInfo(object) {
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a function that takes an object, if this object has a noises
array return them as a string separated by a space, if there are no noises 
return 'there are no noises' */
function maybeNoises(object) {
    if (object.noises !== undefined && object.noises.length >= 1) {
        return object.noises.join(' ');
    } {
        return "there are no noises";
    }
    }


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that checks a string of words for a specific word
function hasWord(string, word) {
    let stringArray = string.split(' ');
    for (let i = 0; i < stringArray.length; i++) {
        if (word.toLowerCase() === stringArray[i].toLowerCase()) {
            return true;
        }
    } return false;
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes a name parameter, and an object parameter.
//The function should add the name to the object's friends array,
//and return the object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a function that takes a name and an object and return true if 
name is a friend of object and false otherwise.*/
function isFriend(name, object) {
    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
            return true;
   }
       }
    } return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*should take a name and a list of people, and return a list of all the 
people that name is not friends with*/
function nonFriends(name, array) {
    let people = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].friends.includes(name) === false && name !== array[i].name) {
            people.push(array[i].name);        
}
} return people;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a function that takes an object, a key and a value. This function
should update the property <key> on <object> with new <value>. If <key> 
does not exist on <object> create it.*/
function updateObject(object, key, value) {
    object[key] = value;
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a function that takes an object and an array of strings. This
function should remove any properties on object that are listed in array.*/
function removeProperties(object, array) {
    for (var key in object) {
     for (var i = 0; i < array.length; i++) {
         if (key === array[i]) {
             delete object[key];
         }
     }   
    }
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//should take an array, and remove any duplications in it, then return the array
function dedup(array) {
 const uniqueSet = new Set(array);
 const backToArray = [...uniqueSet];
 return backToArray;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}