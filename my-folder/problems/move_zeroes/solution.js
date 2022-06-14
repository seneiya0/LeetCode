/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let prevIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let hold = nums[prevIndex]
            nums[prevIndex] = nums[i]
            nums[i] = hold
            prevIndex++
        }
    }
};