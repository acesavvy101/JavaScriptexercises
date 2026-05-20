const repeatString = function(string, num) {
let variable = ""
if (num < 0) {
    return ("ERROR")
} 
    for (let i=0; i < num ; i++) {
        variable += string
    }
    return (variable);
};

// Do not edit below this line
module.exports = repeatString;

/* THINGS TO REMBER: 
Inputs already come from parameters
Check invalid case first
Use a loop to build a result string
Return result at the end */

/* the loop should run *num* of times, so example:
If num = 3, the loop runs:

i = 0 → 1st time
i = 1 → 2nd time
i = 2 → 3rd time
stops before i = 3

hence why the condition is i < num, not i <= num
 https://chatgpt.com/share/69f989ca-2334-8323-87a4-ce70cb583358 */


 