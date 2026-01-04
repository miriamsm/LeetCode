/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map(); //to store character counts 
    //key: character, value: count
    for (let i = 0; i < s.length; i++) { //iterate through the string
        let char = s.charAt(i); //get the character at index i
        map.set(char, (map.get(char) || 0) + 1); //update the count of the character in the map
        //if character is not in the map, initialize count to 0 and add 1
        //if character is already in the map, increment its count by 1
    }
    for (let i = 0; i < s.length; i++) { //iterate through the string again
        if (map.get(s.charAt(i)) === 1) return i; //check if the count of the character at index i is 1
        //if yes, return the index as it is the first unique character
    }
    return -1;

};