const assert = require('assert');//importing assert function to js
//function fromWhere
var fromWhere = function (carRegNum){
//conditional statements
  if(carRegNum.startsWith('CY')){
   return 'Bellville';
 }else if (carRegNum.startsWith('CJ')) {
     return 'Paarl';
   }else if (carRegNum.startsWith('CA')) {
     return 'Cape Town';
  }else {
    return 'Some other place!';
  }
};
//calling and printing the results
var cap = fromWhere('CA 44884');
console.log(cap);
var bel = fromWhere('KLM 822 L');
console.log(bel);
//testing using assert function
assert.equal(fromWhere('CY 002-451'),'Bellville');
assert.equal(fromWhere('CJ 782-155'),'Paarl');
assert.equal(fromWhere('KHW 764 L'),'Some other place!');
