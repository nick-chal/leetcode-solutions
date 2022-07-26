/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let currDepth = 0;
    let maxDepth = 0;

    [...s].forEach(function (char) {
        if (char == "(")
            currDepth++;
        else if (char == ")" && currDepth > 0)
            currDepth--;

        maxDepth = Math.max(currDepth, maxDepth);
    })
    return maxDepth
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
