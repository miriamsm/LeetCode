/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// approach 1: sliding window approach (slow but works)
var minSubArrayLen = function (target, nums) {
    let minSubArrayLen = 0; //to store the length of the minimum subarray
    for (let i = 0; i < nums.length; i++) { //iterate through the array
        let j = i + 1; //initialize j to the next index after i
        let sum = nums[i]; //initialize sum to the value at index i
        while (sum < target) { //while sum is less than target
            if (j >= nums.length) { //if j is out of bounds, return minSubArrayLen since no valid subarray found
                // if minSubArrayLen is still 0, it means no valid subarray was found 
                // if minSubArrayLen has a value, return it, it happens when a valid subarray was found in the last iteration
                return minSubArrayLen;
            }
            sum += nums[j]; //add the value at index j to sum
            j++; //increment j

        }
        if (minSubArrayLen === 0) { //if minSubArrayLen is 0, set it to the length of the current subarray
            minSubArrayLen = j - i; //length of the current subarray
            continue; //continue to the next iteration
        }
        minSubArrayLen = Math.min(minSubArrayLen, j - i); //update minSubArrayLen if the current subarray is smaller
    }
    return minSubArrayLen; //return the length of the minimum subarray
};

// approach 2: optimized sliding window approach
var minSubArrayLen = function (target, nums) {

    let sum = 0; //to store the sum of the current subarray
    let j = 0; //left pointer of the sliding window
    let minVal = Infinity; //to store the length of the minimum subarray started with Infinity so any valid subarray length will be smaller than it

    for (let i = 0; i < nums.length; i++) { //right pointer of the sliding window
        sum += nums[i]; //add the value at index i to sum

        while (sum >= target) { //while sum is greater than or equal to target
            minVal = Math.min(i - j + 1, minVal); //update minVal if the current subarray is smaller
            sum -= nums[j++]; //subtract the value at index j from sum and increment j
        }
    }

    return minVal === Infinity ? 0 : minVal //return 0 if minVal is still Infinity (no valid subarray found), otherwise return minVal
};