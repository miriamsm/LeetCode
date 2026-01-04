/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map(); // Creates a Map to store: 
    // key: a number we are waiting for
    // value: the index of the number that needs it
    for (let i = 0; i < nums.length; i++) {// Iterate through the nums array
        
        const complement = target - nums[i];
        const index = numMap.get(nums[i]);

        if (index !== undefined) return [index, i]; //If a match is found:index is the index of the previous number, i is the current index The function returns immediately.
        numMap.set(complement, i);
    }
    return 0;
}
