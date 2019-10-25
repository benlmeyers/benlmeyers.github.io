
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//look up .repeat()
//create a for loop to iterate through each level of triangle

function triangles(number) {
    for(let i = 1; i <= number; i++) {
        console.log('#'.repeat(i));
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//log the numbers from 1 to 15
//if the number is divisible by 3, log "fizz" instead
//if the number is divisible by 5, log "buzz" instead
//if the number is divisible by both, log "fizzbuzz"
function fizzBuzz() {
  for(i = 1; i <= 15; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
          console.log("fizzbuzz");
      } else if(i % 3 === 0) {
          console.log("fizz");
      } else if(i % 5 === 0) {
          console.log("buzz");
      } else {
          console.log(i);
      }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*make a program that creates a chessboard, using newline characters, at each position
of the grid should be either a # or a space. the program should work for any and all sizes*/ 

function drawChessboard(number) {
let board = '';
let size = number;
for(let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
    if ((j + i) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
}
drawChessboard();


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
