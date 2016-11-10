//importing assert funtion to JS.
const assert = require('assert')
//declaring funtion transportFee
var transportFee = function(workSchedule){
//instead of if statements we use if switch
    switch(workSchedule) {
        case 'morning':
            return 'Transport Fee is R20';
        case 'afternoon':
            return 'Transport Fee is R10';
        case 'nightshift':
            return 'Transport is free';
//when your not working of off.
        default:
            return 'your not working ' + workSchedule;
    }
};
//calling function and printing results
var mor = transportFee('morning');
console.log(mor);
var lat = transportFee('today');
console.log(lat);
//testing function transportFee using assert function
assert.equal(transportFee('morning'),'Transport Fee is R20');
assert.equal(transportFee('afternoon'),'Transport Fee is R10');
assert.equal(transportFee('nightshift'),'Transport is free');
assert.equal(transportFee('today'),'your not working today');
