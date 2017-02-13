// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1

var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz++
}
console.log(checkz);

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2


i = 3;
while (i > 0) {
  checkz = (checkz - 2);
  i--;
}
console.log(checkz);
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
// create a variable 'number' and set it equal to a 6 index array of 1, 2, 3, 4, 5, 6, 7
// create a variable 'total' and set it to zero
// create a for loop that iterates through the 6 indices of the numbers array and increments by 1 each time
// each time through the loop (6 times) the total variable is increased by the number at THAT index [i] means it loops through and uses each number at each index;
// [0]=1, so we are adding 1, then 2, then 3, etc.
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
