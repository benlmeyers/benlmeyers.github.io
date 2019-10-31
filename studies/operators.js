/**
*0. Javascript includes operators that perform operations on single or multiple values 
*   and produce a result.  It includes various operators listed below.
*/
 
//1. Assignment operators//  
  
let x = 5; // => assigns 5 to x
console.log(x); // => prints 5
let y = 19; // => assigns 19 to y
console.log(y); // => prints 19
x += y; // => assigns x + y to x
console.log(x); // => prints 24


/** The most basic is "=". But, there can also be many other kinds that do assignment 
 *  and something else simultaneously, such as addition assignment, subtraction assignment, 
 *  multiplication assignment, division assignment, remainder assignment, exponentiation 
 *  assignment, left shift assignment, right shift assignment, unsigned right shift assignment,
 *  bitwise AND assignment, bitwise XOR assignment, bitwise OR assignment. In the example
 *  above I've used the addition assignment operator to add my two variables together, and
 *  reassign x to 24. It is now this way for later in this section.
 */

//2. Arithmetic operators//

console.log(y++); // => the ++ operator or addition operator adds 1, so this prints 20
console.log(1 + 4); /* => This is another way of using the addition operator. This one
adds two numbers together. This example prints 5. */
console.log(50 % 7); /* => the % is the remainder operator, this divides the first number 
by the second and returns the remainder.  Here we get 1. */
console.log(18 - 10); /* => the - is the subtraction operator. It does standard subtraction 
math. So this prints 8. */
console.log(2 * 5); /* => the * is the multiplication operator. It multiplies values by
eachother, so here we get 10.*/
console.log(15 / 3); /* => The / is the division operator. It divides the first number
by the second.  This example gives 5. */

/**  An arithmetic operator takes numerical values (either literals or variables) as their 
*    operands and returns a single numerical value. 
*/

//3. Comparison operators//

console.log('peaches' === 'oranges'); // => returns false since the two string values are different
console.log(y !== 19); // => returns false, the !== operator means strictly not equal to
console.log(x > y); /* => returns true, since > operator means greater than and 
24 is larger than 19 */
console.log(60 <= x); /* => returns false, since <= means less than or equal to, and 60
is less than our value of x, which is 24 */

/**  A comparison operator compares its operands and returns a logical value based on 
*    whether the comparison is true. In these examples I used the same variables from above.
*    We can use numerical, string, or object values with comparison operators. Comparison
*    operators are perfect for if-else statements.
*/

//4. Logical operators//

console.log(x > 10 && x <20); /* => returns false, because the && means "and", so both 
comparisons must be true, and while 24 is more than 10, it is not less than 20*/
let dog = 'Spot';
console.log(dog === 'Spot' || dog === 'Clifford'); /* => returns true, because the
|| operator means or, so will print true, if either statement is true, in this case
the first is*/

/** Logical operators are typically used with Boolean (logical) values; when they are, 
 *  they return a Boolean value. For this reason they are super useful for if-else 
 *  statements, when you may want more than one condition for a statement.  However, 
 *  the && and || operators actually return the value of one of the specified operands, 
 *  so if these operators are used with non-Boolean values, they may return a non-Boolean 
 *  value. 
 */

//5. Unary operators (!, typeOf, -)//

console.log(!false); /* => prints true, because the ! operator also known as the 
NOT operator, in this case means NOT false. This is Borat's favorite operator. */
function newFunc() {
    ;
 }
let pizzas = ['Pepperoni', 'Sausage', 'Hawaiian'];
typeof dog; /* => returns 'string', since the typeof operator returns a string 
of the unevaluated operand. */ 
typeof x; // => returns 'number'
typeof (newfunc); /* => returns 'function', the parentheses are optional on all 
typeof operators. */
typeof pizzas; // => returns 'object', since an array is considered an object
typeof doesntExist; // returns "undefined"
console.log(-x); /* => prints to the console -24, since - is the unary negation 
operator. This means it just makes the original value into a negative. */
console.log(-8); // => prints -8 to the console

/** Unary operators deal with only one operand. In my examples above, I used
 *  some variables defined earlier in this section, and created some new ones. 
 *  We can see that in all these examples we only used one operand, which is 
 *  what makes these unary operators.
 */

//6. Ternary operator (a ? b : c)//

let me = {
    name: 'Ben',
    age: 34,
    oldEnoughToBePrez: null
};
me.oldEnoughToBePrez = me.age >= 35 ? 'Yes' : 'No'; /* => returns 'No', because 
I'm not old enough to be president. */


/** The conditional (ternary) operator is the only JavaScript operator that takes
 *  three operands. This operator is frequently used as a shortcut for the if 
 *  statement.  In the USA, you have to be 35 to be president. So, I'm using the
 *  ternary operator to test, if I am. You can clearly see the 3 inputs, hence
 *  the ternary operator.  And, how this would be quicker and easier than a if-else
 *  chain.
 */