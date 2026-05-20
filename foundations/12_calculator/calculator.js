const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum, accumulator) => sum + accumulator ,0);
};

const multiply = function(array) {
   return array.reduce((sum,multiplier) => sum * multiplier, 1); // intial value is 1 cus if its 0 then it would forever be 0
};

const power = function(base, exponent) {
	//so u want the base to be multiplied by itself "exponent" times
  return base ** exponent;
};



const factorial = function(number) {
  let result = 1;
	for (let i =number; i>0; i--) {
    result *= i // this is the same as  += 
  }
  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


