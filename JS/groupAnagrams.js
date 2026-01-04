/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const anagramMap = new Map(); //create a map to store anagram groups
    for (const str of strs) { //iterate through each string in the input array
        const sortedStr = str.split('').sort().join(''); //sort the characters of the string
        if (!anagramMap.has(sortedStr)) { //if the sorted string is not already a key in the map
            anagramMap.set(sortedStr, []); //initialize a new array for this anagram group
        }
        anagramMap.get(sortedStr).push(str); //add the original string to the corresponding anagram group
    }
    return Array.from(anagramMap.values()); //convert the map values to an array and return it
};