/** There are 3 different kinds of loops used in javascript.  Loops are perfect for iterating 
*   over information repeatdly.  They all contain a starting condition, a stopping conidition,
*   an incrementor, and a code block.  They can all be nested inside each other or inside 
*   functions.
*/
  
//1. For loops//

for (let i = 0; i < 5; i++) { /* => this is the basic set-up for a for loop "for" keyword, 
starting condition, stopping condition, incrementor. */
    console.log("Hello!"); // => this is the codeblock
   } // => prints "Hello!" 5 times
for (let i = 100; i < 110; i++) {
    console.log(i);
} // => prints the numbers 100 -> 109
for (let i = 12; i >= 5; i--) {
    console.log(i);
} // => prints the numbers 12 -> 5
var apples = ['Fuji', 'Golden Delicious', 'Granny Smith'];
for (let i = 0; i <= apples.length-1; i++) { /* => this prints the names of the apple
varieties as they are written. */
      console.log(apples[i]);
  }
for (let i = apples.length-1; i >= 0; i--) { /* => this one prints the apple varieties
backwards. */
      console.log(apples[i]);
  } 
  
/** For loops are perfect for doing the same thing repeatdly like in the first example, or
*   iterating over an array like in the second example.
*/

//2. While loops//

let i = 0; // => this is the basic set up for a while loop
while(i < 5) { /* => this is our while statement, and stopping condition, the loop will 
continue while it is true. */
     console.log(i); // => codeblock 
     i++; // => incrementor is inside the codeblock in while loops
    } // => prints the numbers 1 - 4

/** While loops execute for as long as the while statement is true.  Be careful,
*   these are easy to get stuck in an infinite loop, if you forget an incrementer,
*   or choose a bad stopping condition.
*/
    
// 3. For-in loops//

let animals = { // => our object to be iterated over
  jungle: "Monkey",
  ocean: "Shark",
  plains: "Lion"
}
for (var key in animals) { /* => this is the standard set up for a for-in loop, starts 
with the keyword "for", then in the parentheses we have the variable representing a key 
in the object, the 2nd keyword, "key", and finally our object to be iterated over, 
"animals". */
      console.log(key); // => this is our codeblock
  } // => in this example we will log the keys of the object to the console.
for (let key in animals) {
      console.log(animals[key]);
} // => in this example we will log the values of the object to the console.

/** For-in loops are perfect for iterating over objects. The block of code inside the 
*   loop will be executed once for each property. 
*/