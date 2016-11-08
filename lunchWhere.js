//importing assert function to JS
const assert = require('assert');

var lunchWhere = function(bankBalance){
  if (bankBalance>=4500){
    return 'Go and get KFC!'
  }else if (bankBalance<4500 && bankBalance>1500) {
    return 'Go to PnP!'
  }else {
    return 'Two minutes noodles today!';
  }
};

//testing above code
assert.equal(lunchWhere(4500), 'Go and get KFC!');
assert.equal(lunchWhere(3500), 'Go to PnP!');
assert.equal(lunchWhere(1000), 'Two minutes noodles today!');
