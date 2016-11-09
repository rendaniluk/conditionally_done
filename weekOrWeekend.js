const assert = require('assert');
//declaring the function
var weekOrWeekend = function(day){
//condition for weekdays
var week = !day.startsWith('S');
//conditional statement.
    if (week){
      return 'week'
  }else{
    return 'weekend'
  }
};
//calling function and store it on varibles
var Wed = weekOrWeekend('Wednesday');
console.log(Wed);
var Sun = weekOrWeekend('Sunday');
console.log(Sun);
//testing using assert functions
assert.equal(weekOrWeekend('Wednesday'),'week');
assert.equal(weekOrWeekend('Sunday'),'weekend');
