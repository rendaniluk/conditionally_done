//importing assert function to JS
const assert = require('assert')
//this will evaluate to true JS convert string to a number
var match = ('190' == 190);
assert.equal(match, true);

//this will evaluate to false JS takes string as it is and compare with number
var match = ('190' === 190);
assert.equal(match, false);
