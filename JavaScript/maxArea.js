/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0; //left pointer
    let right = height.length - 1; //right pointer
    let maxArea = 0; //to store the maximum area

    //while left pointer is less than right pointer 
    // no need to check when they are equal because area will be 0
    while (left < right) {
        //calculate the area formed by the lines at left and right pointers
        // area = min(height[left], height[right]) * (right - left) 
        // meaning the height is determined by the shorter line
        // and the width is the distance between the two lines
        // multiply height by width to get the area
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea); //update maxArea if currentArea is greater

        //move the pointer pointing to the shorter line inward
        // this is because moving the longer line inward will only decrease the area
        // while moving the shorter line might increase the area

        if (height[left] < height[right]) { 
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};