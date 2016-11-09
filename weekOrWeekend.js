const assert = require('assert');
//declaring the function
var weekOrWeekend = function(day){
//condition for weekdays
  var week = !day.startsWith('S');
//conditional statement.
    if (week){return 'week'
    }else{
      return 'weekend'
     }
};
//calling function and store it on varibles
var days = weekOrWeekend('Wednesday');
console.log(days);
var today = weekOrWeekend('Sunday');
console.log(today);
var mon = weekOrWeekend('Monday');
console.log(mon);
var sat = weekOrWeekend('Saturday')
//testing using assert functions
assert.equal(weekOrWeekend('Wednesday'),'week');
assert.equal(weekOrWeekend('Sunday'),'weekend');
