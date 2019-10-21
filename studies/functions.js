/** Functions are one of the fundamental building blocks in JavaScript. A 
 *  function is a JavaScript procedure, a set of statements that performs a 
 *  task or calculates a value.  A function can be called any number of times
 *  later.
 */

/*1a. The two phases to using functions: First we must declare or name our 
      function, with a declaration or expression*/
let x = 2; 
let y = 3;
function myFunc(a, b) {
  console.log(a * b); // => this is the code block that gets executed when called
}

//1b. Next we can execute or invoke our function by calling it//
myFunc(x, y); // => prints 6

//2. What’s the difference between a function’s parameters and arguments PASSED to a function?//

/**  The parameters are in the parentheses immediately following the name of the function,
 *   when it is named.  The arguments are there when it is invoked.  In my example, a & b
 *   are the parameters, and x & y are the arguments.
 */

//3. What’s the syntax for a NAMED function?//

/**  Functions do not always need a name, but in my example above it is named "myFunc".
 */

//4. How do we assign a function to a variable?//

let v = 20;
let z = 22;
const myPhunction = function(c, d) {
  return c + d;
}
myPhunction(v, z); // => returns 42

/**  When we assign a function to a variable, we are using a function expression.
 *   In my example, In this example, I didn't name my function, but I did assign 
 *   it to the variable, "myPhunction".
 */

/*5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
     How do we specify inputs, and how do we specify outputs?*/
let r = 85;
function myPhunc(x) {
  console.log(r + 100);
  console.log(r - 30);
}
myPhunc(r); // => prints to the console 185, 55
function printer() {
    console.log("This function needs no inputs");
} 
printer(); // => prints to the console "This function needs no inputs"

/**  Inputs are the arguments we use when the function is invoked.  We can use
 *   as many inputs as we want, as long as they match the number of parameters
 *   when the function was named, declared, or expressed.  In other examples, in 
 *   this functions doc, I've demonstrated one output, and multiple inputs. So, in
 *   myPhunc, I've demonstrated one input, and two outputs. In the function "printer".
 *   I've demonstrated a function with no inputs.
 */

/*6. Scope: Functions can see and modify variables in parent or global scopes. 
     The inverse is NOT true.*/
    
var globalVar = 12; 
(function parentFunc() {
    var parentVar = 5; 
    console.log(parentVar); // =>console logs 5
    function childFunc(a, b) { // => parameters are set as a & b
     return a - b; // => subtracts 5 from 12
   }
console.log(childFunc(globalVar, parentVar))/* => arguments are globalVar & parentVar 
console logs 7 */
} ()); // => self invokes parentFunc

/**  In this example the function childFunc takes one argument from it's parent function,
 *   which I've called parentVar, and an argument from the global scope, which I've 
 *   called globalVar.
 */

/*7. Closures: Functions form closures around the data they house. If an object 
     returned from the Function and is held in memory somewhere (referenced), that 
     closure stays ALIVE, and data can continue to exist in these closures! 
     (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript 
     Closures with Ease)*/
    
/**   A closure is the act of referencing a variable in a parent scope while keeping its
 *    value alive.  Because JavaScript variables can belong to the local or global scope,
 *    closures are useful to make global variables local or private.
 */