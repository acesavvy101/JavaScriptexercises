const reverseString = function(string) {
   let newString = string.split ('').reverse ().join ('')

    return newString;
};

// Do not edit below this line
module.exports = reverseString;

/* the idea is to convert the string into an array with .split()
then .reverse() it
then use the .join() to convert back to string */

/* CHAINING THE FUNCTIONS for readability. 
https://chatgpt.com/share/69f990fc-37d4-8320-8d44-174264de4854 */


