/**  The control flow is the order in which the computer executes the statements
*    in a script. Code is run in order from the first line to the last line, unless
*    it runs into structures that change it's control flow.  In this section, I'll
*    discuss some of the ways we can change it.
*/

//1. If//
var num = 729;
if (num < 10) {
    console.log("We got a single digit"); /* => prints "We got a single digit", if the
    number is smaller than 10, if the number is larger than 10, we will continue to the
    next section. In this example, the number is larger than 10, so this statement will
    not run.*/
}

/**  If statements are usually followed by conditionals, and blocks of code that run
*    if the if statement is true. If it's not true, we continue to the next statement.
*/    
 
//2. Else-if//

  else if(num < 100 ) {
    console.log("We got double digits!"); /* => since we 
    already know it's bigger than 9, from the if statement, we know it's between 10 and 99, 
    if this is true. In this example, the number is larger than 100, so this statement will
    not run.*/ 
} else if(num < 1000) {
    console.log("We got a century!"); /* => prints "We got a century!", since we already
    know it's bigger than 99, from the previous if statement, it must be between 100 and 
    999, if this is true. In an if-else-if chain, only one statement will execute.  In my
    example, this is the only one that runs. The code will break out of the chain, and not
    look at any other statements.*/
} else if(num < 10000) {
    console.log("That's four digits, buddy!"); /* => 
    Since we already know it's bigger than 999, if it's true to this else-if, it must be
    4 digits. If it's still false, we will continue to the next section. In this example, 
    the number our previous statement has run, so this statement will not be read.*/
}

/**  If statements can run none, or as many else-if statements as you wish.  In 
 *   JavaScript we don't use a "-", but when talking about them we do.  Nobody  
 *   knows why. In my example, I figured 3 else-if statements, was a good length.
 *   If any statement in an if-else-if chain is true, that is the only one that runs. 
 */

//3. Else//

else {
    console.log("That's a mighty big number, ya got there!"); /* => Since we made it 
    past all the other sections. In this example, a previous statement has run, so 
    this statement will not be read.*/
}

/** The else statement is the default statement, and acts as a catch all.  We don't 
 *  need parentheses before the curly braces, because it is the default, it doesn't 
 *  require a condition.  JavaScript does not require an else statement to run, but 
 *  it's almost always a good idea, since we don't want to leave emptyhanded if our 
 *  if statement is false.  
 */

//4. Switch//

let veggies = "Broccoli";
let meat = "Steak"; /* => This is never used, but if we switched meat for veggies in
the next line we would get the default. */
switch (veggies) {
  case 'Carrots':
    console.log('Carrots are $1.19 a pound.');
    break;
  case 'Cauliflower':
    console.log('Cauliflower is $2.49 a pound.');
    break;
  case 'Broccoli': // => In our example veggies = Broccoli!
  case 'Asparagus':
    console.log('Broccoli and Asparagus are $1.99 a pound.'); // => This one prints
    break;
  default:
    console.log('Sorry, we are out of ' + veggies + '.');
}

/** The switch statement is used to perform different actions based on different conditions.
 *  It evaluates a variable, and matches it to different cases, until it finds one that 
 *  matches, then executes statements associated with that case. If more than one case 
 *  matches, and there is a "break" keyword, the first one that matches will be executed. 
 *  If no matching case clause is found, the program looks for the optional default clause, 
 *  and if found, transfers control to that clause, executing the associated statements. 
 *  Usually, the default clause is the last clause, but it does not need to be.  
 */