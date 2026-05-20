const sumAll = function(a, b) {
 let sum = 0 // we need this to start with and increment it
  let min = Math.min(a, b)
let max = Math.max(a, b)

if (a < 0 || b < 0) {
    return ("ERROR");
} else if (typeof (a)!== "number") {
    return ("ERROR");
} else if (typeof (b)!== "number") {
    return ("ERROR");
} else if (Number.isInteger(a) == false) { // again bro its comparison not assignment!
    return ('ERROR');
} else if (Number.isInteger(b) == false) {
    return ('ERROR');
}


    for (let i=min ; i <= max; i++)  { // start with a, end with b <= bcus include both numbers
       sum += i ;
 } return sum
    
};

// Do not edit below this line
module.exports = sumAll;

//for line 20/21 RETURN AFTER THE FOR LOOP!
//OH. USE A LOOP TO ADD FROM START TO FINISH 
// https://chatgpt.com/c/69f9a48d-8bb4-83a4-8c37-2dfd0e71000c


