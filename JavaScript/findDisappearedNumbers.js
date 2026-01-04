/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let numsSet = new Set(nums); // Create a Set from the sorted array to store unique numbers
    let dis = []; // Initialize an empty array to store disappeared numbers
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) { // Check if the number i is not in the Set
            dis.push(i); // If not, add it to the disappeared numbers array
        }
    }

    return dis;

};