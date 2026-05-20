const getTheTitles = function(books) {
 let title = books.map((item) => item.title); //item.title to access the specific value in the object
 return title; //map already made a new array, u dont need to declare with an empty array!
};

// Do not edit below this line
module.exports = getTheTitles;
