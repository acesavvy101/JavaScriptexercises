const removeFromArray = function(arr, ...args) {
    return arr.filter ((item) => {
         return !args.includes((item)) // needs to be returned properly from the filter callback
    } 
)   
};

// Do not edit below this line
module.exports = removeFromArray;


//filter () already loops through the array (so u can choose to keep or remove it)
//ALSO: for filet if its true it automatically stays, but if its false then it gets removed u dont need to remove it manually!
// you're not checking if an element exists in an array, you're checking to remove a matching item


// https://chatgpt.com/c/69f994c0-506c-83aa-a9a5-bca5473552ba 

/* function removeFromArray (array, num) {
    return array.filter((item) => {
        if (item == num) {
        return false 
        } else {
         return true
        }
        })
} */

// for line 21, you have to check if that item is equal to the number, bcus ure checking each item individually not the whole array