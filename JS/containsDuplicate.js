/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet = new Set(); // Creates a Set to store unique numbers
    const unique=0;
    for (let i=0, len=nums.length; i<len; i++) {
        if (numSet.has(nums[i]))
            return true; // If the number is already in the Set, a duplicate is found
        numSet.add(nums[i]); // Adds the number to the Set}};
    }
    return false;
};


var containsDuplicate2 = function(nums,k) {

}