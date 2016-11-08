const assert = require('assert');//importing assert function to JS
//function autoAlarm
var autoAlarm = function(tomorrow){
//declaring weekdays using string built-in function startsWith.
//in this case weekdays does not start with 'S' thus why we use !tomorrow
  var weekdays = !tomorrow.startsWith('S');
  //conditional statement that returns time for weekdays and weekends
  if(weekdays){
        return '5:00';
  }else {
    return '8:00';
  }
};
//calling function autoAlarm and storing its result to variable result and
//results ans printing results on console
var result = autoAlarm('Saturday');
console.log(result);
var results = autoAlarm('Monday');
console.log(results);
//testing using assert function
assert.equal(autoAlarm('Sunday'),'8:00');
assert.equal(autoAlarm('Wednesday'),'5:00');
