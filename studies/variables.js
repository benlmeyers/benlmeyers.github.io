/** VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables. 
*    Variables are named identifiers that can point to values of a particular type, like a 
*    Number, String, Boolean, Array, Object or another data-type.  Variables are called so 
*    because once created, we can CHANGE (unless const) the value (and type of value) to 
*    which they point.
*
* 1. To create a variable we use the one of the keywords, var, let, or const, followed 
*    by a name (id or alias) for our variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;
console.log(myName); // prints => undefined

/** Although, it is possible to do it at the same time, in this example, we have not, 
*   so at the declaration phase, the variable myName is undefined because we have NOT 
*   initialized it to anything.
*/


// 2. initialization or assignment //

myName = 'john';
console.log(myName); // prints => john

/** Now our variable does have a value, so we are on our way!
 */

// 3. re-assignment //

myName = 'bob';
console.log(myName); // prints => bob

/** Unless we use the keyword "const", when declaring the value, we are always able to
 *  change it later.  In this case, we've decided the name 'bob' is better than 'john',
 *  for obvious reasons.
 */

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

var myVariable = 1;
myVariable = true;
myVariable = "someString";

// 4. var, let, and const//

let newVariable = 'Jim';
newVariable = "Franklin"; // => just like in the above examples, we can reassign lets
const otherVariable = 'Fred'; // => we cannot reassign this variable

if (otherVariable === 'Fred') {
    let sandwich = "Po Boy";
    console.log(sandwich); // => prints "Po Boy", but only allowed inside the block
  var burger = "Cheeseburger";
}
console.log(burger); /* => prints "Cheeseburger", allowed outside, because declared 
with var */


/** There are 3 main differences between these variable types, the first is the ability 
 *  to reassign let and var, but not const.  The second is that const and let are block 
 *  scoped, while var is either local scoped or global scoped.  The third, is the way
 *  they are hoisted, I'll discuss this in the next section.
 */

// 5. Hoisting//

console.log(x); // => prints 4
var x = 4; // => this variable is hoisted to the top for use

/** In javascript while all variables are hoisted to the top of the page, let and const
 *  are kept in the "Temporal Dead Zone".  While, this sounds like a fun Star Wars type
 *  place, it actually isn't.  However, the var keyword is hoisted with it's value and
 *  available for use in the global scope, unless it's stuck inside a function, in
 *  which case, it's function scoped.
 */