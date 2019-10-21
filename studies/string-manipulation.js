/**  When we create a string our variable becomes a string object instance.  We can 
 *   then manipulate it a bit using operators, methods, and finding its properties. 
 */

//1. With operators//
let firstName = 'Ben';
let lastName = 'Meyers';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // => prints "Ben Meyers"

 /**  In my example, I used the assignment operator to assign my first and last 
  *   names to the variables firstName and lastName, then I used the addition operator
  *   to concatenate them.  We can use this operator as many times as we want, to 
  *   make a giant string if we have to.  Important to remember that javascript does
  *   not add spaces, so we have to do that ourselves, if so desired.
  */

//2. With string methods//
console.log(firstName.length); // => prints "3"
console.log(lastName.indexOf['y']); // => prints "2"
console.log(lastName.slice(1, 4)); // => prints "eye"
console.log(fullName.toUpperCase); // => prints "BEN MEYERS"

 /**  In these examples, I used some of the most basic methods to find different
  *   properties of my strings from my previous example, and then to manipulate them
  *   the .length property returns the length of a string.  My example is my 3 letter
  *   first name.  The .indexOf method returns y, since 0 is the first letter.
  *   The .slice method extracts the letters starting with the one at position 1, and 
  *   ending with the one at position 4.  And, the .toUpperCase method returns the
  *   string in all upper case letters.
  */