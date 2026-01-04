/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// approach 1: modifying the input matrix by removing rows and columns
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) { // edge case: empty matrix
        return [];
    }

    const result = []; // to store the spiral order
    // loop until all layers are traversed 

    // In this approach, we are moving top row, then the right column, then the last row,
    // then the left column. And we will repeat that by popping the row and the column while moving. 
    // So in the end, it will be moving clockwise 
    // Move clockwise: top row → right column → bottom row → left column, 
    // while it keeps removing the rows and columns 
    // until the matrix is empty.

    while (matrix.length) {
        // Take the first row and remove it from the matrix
        // matrix.shift() removes the first row and returns it
        result.push(...matrix.shift());

        // Take the last element of each remaining row 
        for (let row of matrix) {
            // row is each remaining row in the matrix and we are taking the last element of each row
            if (row.length) result.push(row.pop()); // take last element because we are moving clockwise
        }

        // Take the last row in reverse order
        // matrix.pop() removes the last row and returns it
        if (matrix.length) {
            result.push(...(matrix.pop().reverse())); // take last row and reverse it
        }

        // Take the first element of each remaining row (from bottom to top)
        // reverse iterate through the remaining rows
        // This is the left column 
        for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length) result.push(matrix[i].shift()); // take first element because we are moving clockwise
        }
    }

    return result;
};

// approach 2: using boundaries to track the layers without modifying the input matrix
var spiralOrder2 = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        // edge case: empty matrix
        return [];
    }

    const result = []; // to store the spiral order
    let top = 0; // top boundary
    let bottom = matrix.length - 1; // bottom boundary
    let left = 0; // left boundary
    let right = matrix[0].length - 1; // right boundary

    // Traverse the matrix in spiral order
    // Move clockwise: top row → right column → bottom row → left column
    // Boundaries are adjusted inward after each traversal
    while (top <= bottom && left <= right) { // while there are still layers to traverse
        // Traverse right across the top row 
        for (let i = left; i <= right; i++) { // move from left to right
            result.push(matrix[top][i]); // add top row elements
        }
        top++; // move top boundary down

        // Traverse down the right column
        for (let i = top; i <= bottom; i++) { // move from top to bottom
            result.push(matrix[i][right]); // add right column elements
        }
        right--; // move right boundary left

        // Traverse left across the bottom row
        if (top <= bottom) { // check if there are rows remaining
            for (let i = right; i >= left; i--) { // move from right to left
                result.push(matrix[bottom][i]); // add bottom row elements
            }
            bottom--; // move bottom boundary up
        }

        // Traverse up the left column
        if (left <= right) { // check if there are columns remaining
            for (let i = bottom; i >= top; i--) { // move from bottom to top
                result.push(matrix[i][left]); // add left column elements
            }
            left++; // move left boundary right
        }
    }

    return result;
};