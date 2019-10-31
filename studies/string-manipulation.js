/**  When we create a string our variable becomes a string object instance.  We can 
 *   then manipulate it a bit using operators, methods, and finding its properties. 
 */

//1. With operators//
let firstName = 'Ben';
let lastName = 'Meyers';
let suffix = " Champion";
let fullName = firstName + ' ' + lastName;
console.log(fullName); // => prints "Ben Meyers"
console.log(fullName += suffix); /* => prints "Ben Meyers Champion" this is the
addition assignment operatior. */

 /**  In my example, I used the assignment operator to assign my first and last 
  *   names to the variables firstName and lastName, then I used the addition operator
  *   to concatenate them.  We can use this operator as many times as we want, to 
  *   make a giant string if we have to.  Important to remember that javascript does
  *   not add spaces, so we have to do that ourselves, if so desired. Finally I 
  *   used the addition assignment operator, this concatenates, and assigns at once.
  *   Notice, that I used a space inside the quotes before my word in suffix, so I
  *   didn't have to add it, like I did in the addition operator example.
  */

//2. With string methods//
console.log(lastName.indexOf('y')); // => prints "2"
console.log(lastName.slice(1, 4)); // => prints "eye"
console.log(fullName.toUpperCase()); // => prints "BEN MEYERS"
console.log(fullName.toLowerCase()); // => prints "ben meyers"
console.log(firstName.charAt(2)); // => prints "n"
console.log(firstName.repeat(3)); // => prints "BenBenBen"

 /**  In these examples, I used some of the most basic methods to find different
  *   properties of my strings from my previous example, and then to manipulate them
  *   the .length property returns the length of a string.  My example is my 3 letter
  *   first name.  The .indexOf method returns y, since 0 is the first letter.
  *   The .slice method extracts the letters starting with the one at position 1, and 
  *   ending with the one at position 4. the .toUpperCase method returns the string 
  *   in all upper case letters. the .toLowerCase method returns the string in all
  *   lower case letters.  the .charAt method returns the value at the given index.
  *   the repeat method repeats the string left of the . the number of times in
  *   the parentheses.
  */
  
  