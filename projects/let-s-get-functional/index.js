// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-benlmeyers");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //must use filter function
    var malesarr = _.filter(array, function(customerObj, i, array) {
        return customerObj.gender === "male";
    });
    return malesarr.length;
};

var femaleCount = function(array) {
    //use reduce function
    //input: array
    //output: number
    return _.reduce(array, function(seed, customerObj, i, arr) {
        //if customerObj's gender is female add 1
        if (customerObj.gender === "female") {
            seed++;
        }
        return seed;
    }, 0);
};

var oldestCustomer = function(array) {
    //find the oldest customer's name
    //input: array of customers
    //output: string of oldest customer's name
    //iterate through the array, and compare customer's ages
    //using reduce, compare current customer's age to previous customer's age
    //reassign the older one to the previous customer

    return _.reduce(array, function(previous, current, i) {
        if (current.age > previous.age) {
            return current;
        }
        else {
            return previous;
        }
    }).name;
};

var youngestCustomer = function(array) {
    //find the youngest customer's name
    //input: array of customers
    //output: array of customers
    //iterate through the array, and compare customer's ages, return the youngest one
    return _.reduce(array, function(previous, current, i) {
        if (current.age < previous.age) {
            return current;
        }
        else {
            return previous;
        }

    }).name;
};

var averageBalance = function(array) {
    //iterate through the array of customers, find their balances
    //use the reduce method to add all their balances together
    //divide by the total number of customers
    let money = 0;
    let avgBalance = _.reduce(array, function(seed, customer, i, array) {
        money = customer.balance.slice(1);
        money = money.split(',').join('');
        money = Number.parseFloat(money);
        return seed += money;
    }, 0);
    return avgBalance / array.length;
};

var firstLetterCount = function(array, letter) {
    //iterate through the array of customers, find how many start with a given
    //first letter
    return _.reduce(array, function(seed, customer, i, array) {
        if (customer.name[0].toLowerCase() === letter.toLowerCase()) {
            seed++;
        }
        return seed;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    //iterate through the array of customers, find the given customer
    //find the friends list, and iterate through that comparing the first letter of
    //their names to the given letter
    let customerMatch = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            customerMatch = array[i];
            break;
        }
    }
    return _.reduce(customerMatch.friends, function(seed, current, j, array) {
        if (current.name[0].toLowerCase() === letter.toLowerCase()) {
            seed++;
        }
        return seed;
    }, 0);
};

var friendsCount = function(array, name) {
       let friends = []; // empty array to gather friends names from
   for (let k=0; k<array.length; k++){ //loop to go through array to get to obj element
       for(let j=0; j<array[k].friends.length; j++){ // loop to go through the friends array in each object within main array
       if(array[k].friends[j].name === name){ // test to see if friends array contains given name
           // console .log(array[k].friends[j].name);
           friends.push(array[k].name); // if statement true then push the obj element's name value into empty array
           // return friends; // return friends array back
       }
       }
   }
   // console.log(friends);
   return friends; // return friends array outside of loop (not sure if I need this)
};

    //Find the customers' names that have a given customer's name in their friends list
    //inputs: array of customers, name to be found
    //ouput: array of customers who have the given name in their friends list
    // for (let i = 0; i < array.length; i++) {
    //         _.reduce(array[i].friends, function(seed, current, j, array) {
    //             if(array[i].friends[j] === name){
    //                 seed.push(name);
    //             }
    //         }, []);
    //     }
    //};

var topThreeTags = function(array) {
        // //Find the three most common tags among all customers' associated tags
        // //array of customers
        // //array of tags
   // create an array to hold all tags in
   let arrTags = [];
 let newTags =  _.reduce(array,function(prev,curr,i){
      if(curr.tags !== undefined){
          arrTags.push(curr.tags)
          // flatten the nesetd arrays
      }
       return  [].concat(...arrTags);
 });
 let tags = _.reduce(newTags,function(prev,curr){
           console.log(prev);
           if(prev[curr] === undefined){
               prev[curr] = 1;
           } else {
               prev[curr] += 1;
           } return prev;
},{});
var newArray = [];
_.each(tags,function(count,word,object){
    newArray.push([word,count]);
});
// sort our array highest to lowest
 newArray.sort(function(a,b){
   return b[1] - a[1];
 });
// console.log(newArray);
 var final = [];
 for(var i = 0; i < 3; i++){
     final.push(newArray[i][0]);
 } return final;
}

    //     var allTags = [];
    //     let obj = {};
    //     for (let i = 0; i < customers.length; i++) {
    //         allTags = allTags.concat(customers[i]['tags']);
    //     }
    //     let tagCount = _.reduce(allTags, function(acc, currentTag, i, array) {
    //         if (acc[currentTag] === undefined) {
    //             acc[currentTag] = 1;
    //         }
    //         else {
    //             acc[currentTag]++;
    //         }
    //         return acc;
    //     }, obj);
    //      //console.log('tagCount', tagCount);
        
    //     let nestedArr = [];
        
    //     _.each(tagCount, function(seed, tag, object) {
    //         nestedArr.push(obj[tag, seed]);
    //     });
        
    //     nestedArr.sort(function(a, b) {
    //         return b[1] - a[1];
    //     });
        
    //     var resultArr = [];
    //     for (let i = 0; i < 3; i++) {
    //         resultArr.push(nestedArr[i][0]);
    // } 
    //  };

        var genderCount = function(array) {
            //create a summary of genders
            //input: array of customers
            //output: object with genders as keys, and numbers as values
            //use reduce
    let male = 0;
    let female = 0;
    let nonBinary = 0;
    return  _.reduce(array, function(prev, customerObj, i){
       if (customerObj.gender === "male"){
           male += 1;
       } else if (customerObj.gender === "female"){
           female += 1;
       } else{
           nonBinary += 1;
       }
       return {
           male,
           female,
           "non-binary": nonBinary
       };
   }, 0);
};



        //////////////////////////////////////////////////////////////////////
        // DON'T REMOVE THIS CODE ////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////

        // here, export any references you need for tests //
        module.exports.maleCount = maleCount;
        module.exports.femaleCount = femaleCount;
        module.exports.oldestCustomer = oldestCustomer;
        module.exports.youngestCustomer = youngestCustomer;
        module.exports.averageBalance = averageBalance;
        module.exports.firstLetterCount = firstLetterCount;
        module.exports.friendFirstLetterCount = friendFirstLetterCount;
        module.exports.friendsCount = friendsCount;
        module.exports.topThreeTags = topThreeTags;
        module.exports.genderCount = genderCount;
