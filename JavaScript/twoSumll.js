/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map(); // Create a map to store numbers and their indices
    for (let i = 0; i < nums.length; i++) { // Iterate through the array
        const complement = target - nums[i]; // Calculate the complement
        if ((map.get(complement) == null)) { // Check if the complement is in the map
            map.set(nums[i], i);
        } // If not, add the current number and its index to the map
        else {
            return [map.get(complement)+1, i+1]; // If found, return the indices +1 each to transform from 0-based to 1-based indexing
        }
    }
    return []; // Return an empty array if no solution is found
}