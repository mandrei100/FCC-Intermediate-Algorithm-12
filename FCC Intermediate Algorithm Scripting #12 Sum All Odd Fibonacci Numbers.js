/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Passed
sumFibs(1) should return a number.
Passed
sumFibs(1000) should return 1785.
Passed
sumFibs(4000000) should return 4613732.
Passed
sumFibs(4) should return 5.
Passed
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.

///////////////////////////////////////////////////////////////////////////////////////////////////
*/
function sumFibs(num) {
  // firstNum and secondNum are our starting points
  var firstNum = 0;
  var secondNum = 1;
  // two empty arrays to place
  var sequence = [];
  var index = [];
  // while loop used to push all Fibonacci numbers into array sequence
  while (firstNum <= num) {
    sequence.push(firstNum, secondNum);
    firstNum = firstNum + secondNum;
    secondNum = firstNum + secondNum;
    }
  // for loop used to push all numbers smaller than the value of num into empty array index;
  for (var key in sequence) {
  if (sequence[key] <= num) {
    index.push(sequence[key]);
  }} 
  // for loop used to push ONLY odd numbers into array oddIndex
  var oddIndex = [];
  for (var key in index) {
    if (index[key] % 2 !== 0) {
      oddIndex.push(index[key]);
    }
  }
  // adds all numbers in oddIndex
  var output = oddIndex.reduce(function(a,b){
    return a+b;
  });
  // returns sum of all numbers in oddIndex
  return output;
}

sumFibs(75025); //should return 135721