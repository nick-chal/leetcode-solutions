/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    result = Math.max(...nums)
    localMax = 1
    localMin = 1

    nums.forEach(x => {
        if (x == 0) {
            localMax = 1
            localMin = 1
        }

        tmpMax = localMax
        localMax = Math.max(x * localMax, x * localMin, x)
        localMin = Math.min(x * tmpMax, x * localMin, x)

        result = Math.max(result, localMax)
    })
    return result
};

console.log(maxProduct([2, 3, -2, 4]))