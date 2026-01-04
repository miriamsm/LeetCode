/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) { //start from index m to the end of nums1
        if (nums1[i] == 0) { //if the current position is 0 (empty)
            nums1[i] = nums2.shift(); //replace it with the first element from nums2
        }
    }
    nums1.sort((a, b) => a - b);//sort nums1 in ascending order

};