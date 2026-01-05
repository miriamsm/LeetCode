/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// approach: start from the top-right corner and eliminate rows or columns
// since each row and each column is sorted in ascending order
// if the current element is greater than target, move left to eliminate the current column
// if the current element is less than target, move down to eliminate the current row
// repeat until the target is found or the indices go out of bounds

//In this approach, we are checking the last column in each row. 
// If it's greater than the target, then the target is in this row. since it's sorted. 
// If it's not, then we iterate through the next row, and so on.
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) { //check for empty matrix
        return false; //return false if matrix is empty
    }
    if (matrix.length === 1 && matrix[0].length === 1) { //check for single element matrix
        return matrix[0][0] === target; //return true if the single element is equal to target
    }
    let j = matrix[0].length - 1; // the last index of the rows AKA the rightmost column 
    let index = 0; //a pointer to go through the columns
    for (let i = 0; i < matrix.length; i++) { //iterate through the rows
        if (matrix[i][j] == target) { //if the current element is equal to target
            return true; //return true
        }
        if (matrix[i][j] > target) { //if the current element is greater than or equal to target

            while (index < j) { //move left in the current row
                if (matrix[i][index] == target) { //if the current element is equal to target
                    return true; //return true
                }
                index++; //move to the next column in the same row
            }
        }

    }
    return false; //return false if target is not found
};