/**   Datatypes
* 0.  There are many different datatypes.  A variable in javascript can contain any data, 
*     and can change datatypes.  Below, I will discuss the different types and give examples.
*/

// 1. Number//
var num = 42;
console.log(num); // => prints "42"

/**   A number is a primitive datatype allowing you to work with numerical values. 
*     that can consist of any number of integers and decimal places, and 
*     should not be surrounded by quotes. Numbers are useful for math equations.
*/

//2.  String//
var myName = "Ben";
var longString = `Today is a beautiful day, the sun is shining, 
and it is not nearly as hot as it has been for a while`;
console.log(myName); // => prints "Ben"
                  
/**   A string is a primitive datatype made up of a combination of letters and can contain 
*     numbers, and must be surrounded by quotes.  Strings can be surrounded by 'single quotes', 
*     "double quotes", and `back ticks`.  The main difference between these, is that if the 
*     string is on multiple lines, it must be in `back ticks`.  Sometimes single or double 
*     quotes are more useful than the other to not be confused with apostrophes, or each other
*     for example, when one may be used in bracket notation.
*/

// 3. Boolean//
var myBool = true;
var myOtherBool = false;
console.log(myBool); // => prints "true"

/**   Booleans are the most primitive of data types.  They only take up 1 bit of data, 
*     which is the smallest amount possible. It can only be true or false, always 
*     displayed in all lower case.  Booleans are frequently thought of as a light 
*     switch, true being on, and false being off. Booleans are great for for "if/else"
*     statements, frequently running the if statement if true, and the else statement
*     if false.
*/
     
// 4. Array//
let myArray = [2, 'Frank', myBool, false, [12, 48, 103]];
const otherArray = [1, 2, 3, 4];
console.log(otherArray[0]); // => prints "1"

/**   An array is an object datatype always housed in square brackets [].  It can 
*     contain any or all datatypes, including strings, booleans, numbers, objects, 
*     functions, or even other arrays.  In arrays the values are all ordered and
*     can be accessed using their keys.  The first key is 0, second is 1, etc.  
*     Arrays have a useful .length property.  There are also many other methods 
*     that can be used on arrays, but not on objects, due to arrays being ordered.
*/
     
// 5. Object//
var me = {
firstName: "Ben",
lastName: "Meyers",
age: 34,
cat: "Rasputin",
}
console.log(me.cat); //prints "Rasputin"
console.log(me["age"]); //prints "34"

/**   An object is a complex datatype and an unordered collection of "key: value" pairs.
*     To access anything in an object, you can use dot or bracket notations. Dot notation
*     is preferred.
*/

// 6. Function//


/**   A javascript function is a block of code designed to run when the function is invoked. 
 *    The syntax for a function is a keyword, followed by the function name, the parameters 
 *    in parentheses, curly braces, and a codeblock in the curly braces.  To invoke the
 *    function, you need to use the name, followed by parentheses, with any parameters inside.
 */

//7.  undefined//
var animal;
console.log(animal) // => prints "undefined" 

/**   Undefined means a variable has been declared, but not yet defined.
*/
   

//8.  null//
let plant = null;
console.log(plant); // => prints "null"

/**   null means an empty or non-existant value.  null has been defined, but explicitly means 
*     nothing.
*/
     
//9.  NaN//
NaN === NaN; // false
console.log(Math.sqrt(-1)); // prints NaN

/**   NaN represents "not-a-number" value.  This indicates that the value is not a legal number.
*     It is a non-configurable, non-writeable property.  It is the returned value when math
*     functions fail.  
*
*/
 
//10. Infinity and -Infinity//
console.log(50/0);  // => prints "Infinity"
console.log(22*Infinity); //=> prints "Infinity"
console.log(63*-Infinity); // => prints "-Infinity"

/**   Infinity is a property of the global object, or a variable in global scope.
*     Positive infinity behaves the same way as infinity does mathematically. For example,
*     infinity is greater than any other number. Any number added to or multiplied 
*     by infinity equals infinity.  Any number divided by infinity equals 0.
*     Negative infinity is the same as the negative value of the global object that is
*     infinity.  Any negative value multiplied by negative infinity equals positive infinity.
*     Any positive value multiplied by negative infinity equals negative infinity.
*/

//11. What is the difference between primitive/simple and complex data types?//

/**   Primitive datatypes are one value, whether it be strings, booleans, or numbers.
*     Complex datatypes are a collection of values, they can also be many different
*     dataypes.  
*/

/*12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
      What does that mean, and how are they different?*/
var nameFirst = 'Ben'; 
var nameIs = nameFirst; // => means nameIs equals the value of nameFirst
nameFirst =  'Jim';
console.log(nameIs); // => prints "Ben"
console.log(nameFirst); // => prints "Jim"

var person = {name: "Ben"};
var anotherPerson = person;
person.name = "Jim";
console.log(person.name); // => prints "Jim"
console.log(anotherPerson.name); // => "Jim"
/**  One of the main differences between reference data type and primitive data types 
*    is reference data type’s value is stored as a reference, it is not stored directly 
*    on the variable, as a value, as the primitive data types are.  So, you can see in 
*    the first (primitive) example, when we set nameIs equal to nameFirst, it kept the
*    value of nameFirst, even after we changed the value of nameFirst. In the second 
*    (complex) example, when we changed the original, it changed both values, because
*    it wasn't just the reference.
*/