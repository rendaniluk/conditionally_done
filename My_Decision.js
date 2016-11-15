const assert = require('assert');//importing assert function
//declaring function Decision that takes parameter wheather
function Decision(wheather){
//deciding using conditional statement.
  if(wheather==='hot'){
    var swim = 'Go to swim at Muizenberg.';
    return swim;
  }else if (wheather==='cold') {
    var movie = 'Go to watch movie at Century City.';
    return movie;
  }else if (wheather==='raining') {
    var stay = 'Stay at home and enjoy tea.';
    return stay;
  }else {
    return 'sleep';
  }
}

//calling function Decision and store it to variable sunny and cool
var sunny=Decision('hot');
var cool=Decision('cold not raining and not hot')
//printing variable sunny and cool to console
console.log(sunny);
console.log(cool);
//testing using assert function
assert.equal(Decision('hot'),'Go to swim at Muizenberg.')
assert.equal(Decision('normal wheather'),'sleep')
