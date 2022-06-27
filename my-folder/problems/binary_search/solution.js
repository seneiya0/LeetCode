/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        // declare middle of array or subarray
        const mid = Math.floor((left + right) / 2)
        const potentialMatch = nums[mid]
    // check if the middle element matches the target & return the index if it does
        if(target === potentialMatch){
            return mid
    // if the target is lower than the middle value the new right side (highest value) of the array becomes the value before the prev middle value
        } else if(target < potentialMatch){
            right = mid - 1
    // if the target is higher than the middle value the new left side (lowest value) of the array becomes the value after the prev middle value
        } else {
            left = mid + 1
        }
    }
    // if the loop finishes without returning anything -1 will be returned 
    return -1
};