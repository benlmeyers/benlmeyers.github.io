// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*create a function that uses the reduce method, and the concat method to put 
all of the seperate arrays into one array. */
function flatten(arrays) {
 let flat = [];
 function moreFlat(arrays) {
arrays.forEach(function(value){
 if (!Array.isArray(value)) {
 flat.push(value);
}
else {
 moreFlat(value);
}
 });
 }
 moreFlat(arrays);
return flat;
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*create a function that has a loop. the function should take a value, a test 
function, an update function, and a body function. Each iteration, it first runs 
the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls 
the update function to create a new value and starts from the beginning.*/
function loop(startValue, testFunction, updateFunction, bodyFunction) {
  for(let i = startValue; testFunction(i); i = updateFunction(i)) {
    bodyFunction(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
