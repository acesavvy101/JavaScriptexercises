const palindromes = function (string) {

    const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    const cleanString = string.toLowerCase()
    .split ('') //CONVERTS IT TO AN ARRAY!!!
    .filter((item) => alphaNumerical.includes(item))
    .join(''); //CONVERTS IT BACK TO A STRING!!

// filter only works for Arrays! : i need to filter out punctuation, not delete them!

   //const newArray = Array.from(cleanString); u dont have to convert to an array

   const newString = cleanString.split('').reverse().join(''); // this is where u check for the palindromes

   if (newString === cleanString) {
    return true;
   } else {
    return false;
   }

};

// Do not edit below this line
module.exports = palindromes;
