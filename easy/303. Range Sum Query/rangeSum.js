var NumArray = function (nums) {
    this.nums = nums

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    // return this.nums.slice(left,right+1).reduce((a,b)=>a+b);
    let sum = 0
    for (let index = left; index <= right; index++) {
        sum += this.nums[index]
    }
    return sum
};

var test = new NumArray([1, 2, 3, 4]);

console.log(test.sumRange(1, 2))