/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let result = 0; //initialize result variable to store total time
    while (points.length > 1) { //while there are more than one point left to visit
        let curr = points.shift(); //the current point (removed from the array)
        let next = points[0]; //the next point (first in the array)
        let dx = Math.abs(curr[0] - next[0]); //difference in x coordinates
        let dy = Math.abs(curr[1] - next[1]); //difference in y coordinates
        result += Math.max(dx, dy); //add the max of the two differences to the result
    }

    return result;
};