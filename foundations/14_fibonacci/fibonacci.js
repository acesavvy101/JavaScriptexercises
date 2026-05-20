const fibonacci = function(num) {
    num = Number(num); //you dont redeclare with let, just reassign
    if (num<0) {
        return ("OOPS");
    } else {
    let array= [0,1]; //start with initial 2 numbers in an array
    for (let i=0; i<num;i++) {
        array.push(array.at(-1) + array.at(-2)) // this is the same as fruits[fruits.length - 1]
    }
    return array.at(num);
    }
};

// Do not edit below this line
module.exports = fibonacci;

//use for loop, get the last digits, then push
//to get the last digit and last two digits use the .length -1

/*     for (let i=0; i<array;i++) {
        array.push(array.at(-1) + array.at(-2))
    }
    return array;
};
*/