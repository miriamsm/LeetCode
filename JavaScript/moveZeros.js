/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0; //pointer for the position to place the next non-zero element
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] == 0)) { //if the current element is not zero
            // swap nums[i] and nums[j]
            let temp = nums[i]; //store the current element in a temporary variable
            nums[i] = nums[j]; //swap the current element with the element at pointer j
            nums[j] = temp; //place the non-zero element at position j
            j++;//increment j to the next position
        }
    };
}