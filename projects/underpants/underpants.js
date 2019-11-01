// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value) {
    return value;
};
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
   if(Array.isArray(value) === true){
       return 'array';
   }else if (value === null){
       return 'null';
   }else{
       return typeof(value);
   }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
   if(Array.isArray(array) === false || number < 0 ){
       return [];
   }else if (number !== number || number === undefined){
       return array[0];
   }else if(number > array.length){
       return array;
   }else {
       return array.slice(0, number);
   }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    if(Array.isArray(array) === false || number < 0 ){
       return [];
   }else if (number !== number || number === undefined){
       return array[array.length -1];
   }else if(number > array.length){
       return array;
   }else {
       return array.slice(number -1, array.length);
   }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
   for(let i = 0; i < array.length; i++){
       if(array[i] === value){
           return i;
       }
   }
   return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
       return (array.includes(value))? true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, functionTest) {
   console.log(functionTest);
   console.log(collection);
   if (Array.isArray(collection) === true) {
       for(let i = 0; i < collection.length; i++) {
           functionTest(collection[i], i, collection);
       }
   }else{
       for(let key in collection) {
               functionTest(collection[key], key, collection);
           }
       }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
   //returns new array with duplicates removed
   //use _.indexOf
   let answer = [];
   //check empty array for given array element
   //if its not there put it in
   for(let i = 0; i < array.length; i ++){
       if(answer.indexOf(array[i]) === -1){
           answer.push(array[i]);
       }
   }
   return answer;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
// _.filter = function(array, test) {
//     let arr = [];
//     _.each(array,(function(e,i,a){
//           if(test(e,i,a) === true) {
//               arr.push(e);
//           }
//         }) 
//     return arr;
    
//     )};


_.filter = function(array, test){
  //call function for each array element
  //arguments element, index, array
  //return new array for elements function returned true
  //use .each for extra cred
  let answer = [];
  for(let i = 0; i < array.length; i++){
      if(test(array[i], i, array) == true){
          answer.push(array[i]);
      }
  }
  return answer;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test){
    return _.filter(array, function(ele, i, arr){
       return !test(ele, i, arr);
    }); 
};

// _.reject = function(array, test){
//  //call function for each element in array
//  // function passes arguments element, index, array
//  // returns new array of elements where function returned false
//  //opposite of filter, use filter in code
//   let answer = [];
//   for(let i = 0; i < array.length; i++){
//       if(test(array[i], i, array) == false){
//           answer.push(array[i]);
//       }
//   }
//   return answer;
// };

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test){
   //returns an array of arrays
   let answer1 = [];
   let answer2 = [];
   let answer3 = [];
    for(let i = 0; i < array.length; i++){
       if(test(array[i], i, array) == true){
           answer1.push(array[i]);
       }else{
           answer2.push(array[i]);
       }
   }
   answer3.push(answer1);
   answer3.push(answer2);
   return answer3;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, test){
   //calls function on array or objects
   let container = [];
   if(Array.isArray(collection) === true){
       for(let i = 0; i < collection.length; i++){
           container.push(test(collection[i], i, collection));
       }
   }else{
       for(let key in collection){
           container.push(test(collection[key], key, collection));
       }
  }
  return container;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property){
   //return an array with the values of the given key or property
 let answer = [];
   _.map(array, function(element){
       answer.push(element[property]);
   });
   return answer;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, test){
    let count = 0;
   if(test === undefined && Array.isArray(collection) === true){
       for(let i = 0; i < collection.length; i++){
           if(!collection[i]){
               count += 1;
           }
       }
   }else if (test === undefined && Array.isArray(collection) === false){
       for(let key in collection){
           if(!collection[key]){
               count += 1;
           }
       }
   }else if(Array.isArray(collection) === true && test !== undefined){
       for(let i = 0; i < collection.length; i++){
           if(test(collection[i], i, collection) === false){
               count += 1;
           }
       }
   }else if (Array.isArray(collection) === false && test !== undefined){
       for(let key in collection){
           if(test(collection[key], key, collection) === false){
               count += 1;
           }
       }
   }
if(count === 0){
   return true;
}else{
   return false;
}
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, test) {
  //determine if the collection is an array or object
  //call the test function on every element in the collection
  //if the return value of calling the function on every element is true, for at least one element, return true
  //otherwise return false
  //if the function is not provided return true, if at least one element is truthy, otherwise return false
  let count = 0; 
   if(test === undefined && Array.isArray(collection) === true){
       for(let i = 0; i < collection.length; i++){
           if(collection[i]){
               count += 1;
           }
       }
   }else if (test === undefined && Array.isArray(collection) === false){
       for(let key in collection){
           if(collection[key]){
               count += 1;
           }
       }
   }else if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
         if(test(collection[i], i, collection) === true) {
             count++;
         } 
      }
  }else {
      for (let key in collection){
        if(test(collection[key], key, collection) === true) {
            count++;
        }  
      }
  }if (count > 0) {
      return true;
  } else {
      return false
  }
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
 //pass each element of array to test using the return value of function as "previous result"
 //if the first element in array, use seed as previous result
 //if no seed was given, start on the second element (index 1)
 //after the last iteration, return the value of the final <function> call
_.reduce = function(array, test, seed){
   let seedDefined = 0;
   if (seed === undefined){
       seed = array[0];
       seedDefined = 1;
   }
   for (let i = seedDefined; i < array.length; i++){
       seed = test(seed, array[i], i, array);
   }   return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//copy properties from subsequent objects to object 1
//return object1
//use Array.from(arguments) and spread operator
_.extend = function(object1, object2, ...object) {
    for(let key in object2){
        object1[key] = object2[key];
    } for(let i = 0; i < object.length; i++) {
        for(let key in object[i]) {
            object1[key[i]] = object[i][key];
        }
    }
    return object1;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
