/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let sorted = [...nums].sort((a, b) => a - b);// Create a sorted copy of the original array
    let dict = {}; // Dictionary to store the count of smaller numbers
    let result = [];// Result array to store the final counts

    for (let i = 0; i < sorted.length; i++) {// Populate the dictionary with the first occurrence index
        if (dict[sorted[i]] === undefined) {// Check if the number is not already in the dictionary
            dict[sorted[i]] = i;// Store the index as the count of smaller numbers
        }
    }

    for (let i = 0; i < nums.length; i++) {// Build the result array using the dictionary
        result.push(dict[nums[i]]);// Push the count of smaller numbers for each original number
    }

    return result;
};
