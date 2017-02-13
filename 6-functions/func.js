console.log('hello');

// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4

function myFunction (){
   return 4;
}
// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments

a = 4;
b = 5;
function myOtherFunction (a, b) {
  var c = a * b
  return c;
}
console.log(myOtherFunction(a,b));

// 3 - Write a function expression
// that takes one argument and
// console logs that value.

function myOtherOtherFunction (d){
  console.log(d);
}
console.log(myOtherOtherFunction(67));
