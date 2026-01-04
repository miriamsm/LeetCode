/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) { // edge case: empty matrix
        return [];
    }
    
    const result = []; // to store the spiral order
    let top = 0; // initialize boundaries
    let bottom = matrix.length - 1; // last row index
    let left = 0; // first column index
    let right = matrix[0].length - 1; // last column index
     // loop until all layers are traversed 

     // In this approach, we are moving top row, then the right column, then the last row,
     // then the left column. And we will repeat that by popping the row and the column while moving. 
     // So in the end, it will be moving clockwise, while it keeps removing the rows and columns 
     // until the matrix is empty.

    while (top <= bottom && left <= right) { // continue until boundaries overlap
        // Traverse right across the top row
        for (let i = left; i <= right; i++) { // move from left to right
            result.push(matrix[top][i]); // add top row elements to result 
        }
        top++; // move the top boundary down 
        
        // Traverse down the right column AKA last column
        for (let i = top; i <= bottom; i++) { // move from top to bottom
            result.push(matrix[i][right]); // add right column elements to result
        }
        right--; // move the right boundary left 
        
        // Traverse left across the bottom row
        if (top <= bottom) { // check if there are rows remaining
            for (let i = right; i >= left; i--) { // move from right to left 
                result.push(matrix[bottom][i]); // add bottom row elements to result
            }
            bottom--; // move the bottom boundary up
        }
        
        // Traverse up
        if (left <= right) { // check if there are columns remaining
            for (let i = bottom; i >= top; i--) { // move from bottom to top
                result.push(matrix[i][left]); // add left column elements to result
            }
            left++; // move the left boundary right
        }
    }
    
    return result; // return the spiral order
};