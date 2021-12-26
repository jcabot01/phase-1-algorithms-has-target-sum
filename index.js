// Write your algorithm here
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = (i + 1); j < array.length; j++) {
      if ((array[i] + array[j]) === target) {
        return true;
      }
    } 
  } return false;
}

/* 
Write the Big O time complexity of your function here
Time complexity = 0(n^2)  >>>> not very efficient.  A Brute Force approach.

We are looping through the array for variable 'i' & 'j' n times

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {          //loop n times
    for (let j = (i + 1); j < array.length; j++) {  //loop n times
      if ((array[i] + array[j]) === target) {       //1 step if we find a match that equals target
        return true;        
      }
    } 
  } return false;
}
*/

/* 
  Add your pseudocode here
  Setup a for loop, define 'i' as the zero index as the starting point, then define the ending as arr.length.  Add the increment operator to 'i'.
  Setup a 2nd for loop, with a second variable 'j' to help us find our target value.  'j' starting point needs to be the next value after 'i'. 'j' needs to increment as well.
  Now setup a conditional 'if' statement; if the the sum of 'i' and 'j' equals the target, return true.  Otherwise we are to assume none of the values added together will equal the
  target and need to return false.
*/

/*
I went with the BRUTE FORCE model of creating 2 loops, which use the Quadratic Time complexity 0(n^2); iterating over the entire array, n.length times.  A Binary Search would greatly
reduce the amount items we had to search.  We would have to re-sort the array. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
