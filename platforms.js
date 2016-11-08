//function to check which Platform is trains on certain route
var whichPlatform = function(route){
//intead of if we use if statements
    switch(route) {
        case "Langa":
            return "platform 1";
        case "Stellenbosch":
            return "platform 6";
        case "Wynberg":
            return "Platform 2";
//for other route not listed above it return default
        default:
            return "There is no train to " + route;
    }
}
//importing assert function to JS
const assert = require('assert');

//testing function using assert
assert.equal(whichPlatform('Langa'), 'platform 1');
assert.equal(whichPlatform('Stellenbosch'), 'platform 6');
assert.equal(whichPlatform('Wynberg'), 'Platform 2');
assert.equal(whichPlatform('Parow'), 'There is no train to Parow');
