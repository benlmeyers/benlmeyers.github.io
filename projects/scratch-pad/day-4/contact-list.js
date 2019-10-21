// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//create a factory function called make contact that returns a contact object
function makeContact(id, nameFirst, nameLast) {
    var obj = {};
    obj["id"] = id;
    obj["nameFirst"] = nameFirst;
    obj["nameLast"] = nameLast;
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
 
    return {
        // we implemented the length api for you //
        
        length: function() {
            return contacts.length;
    },
//create a function that takes a contact object to be added to the list.    

        addContact: function(add) {
            contacts.push(add);     
/*create a function that takes a fullName string, and returns the contact object.  or
returns undefined if there is no matching fullName string. */
      },  
            findContact: function(lookFor) {
            for (var i = 0; i < contacts.length; i++) {
                if (lookFor === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i];
              }  
                } 
                return undefined;
            },
        
    
//create a function that takes an object to be removed
           removeContact: function(remove) {
               for (var j = contacts.length-1; j >=0; j--) {
                if (contacts[j] === remove) {
                contacts.splice(j, 1);
       }
}

           }, 
//add a function that prints all contact names seperated with a line break
 printAllContactNames: function() {
          var printer = '';
          for (let k = 0; k < contacts.length; k++) {
          if (k === contacts.length-1) {
             printer += contacts[k].nameFirst + ' ' + contacts[k].nameLast;
          } else
            printer += contacts[k].nameFirst + ' ' + contacts[k].nameLast + "\n";
          }
        return printer;
}
  };
  
}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
