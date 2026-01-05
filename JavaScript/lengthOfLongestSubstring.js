/**
 * @param {string} s
 * @return {number}
 */

// approach 1: sliding window with hashmap (inefficient)
var lengthOfLongestSubstring = function (s) {
    let map = new Map(); //to store characters in the current substring
    let maxLength = new Map(); //to store character counts 
    //key: index, value: length

    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i); //get the character at index i
        if (map.get(char) != null) { //if character is not in the map
            maxLength.set(i, map.size); //update the length of the substring
            i = map.get(char);  //move the index to the next character after the first occurrence of the repeating character
            map.clear(); //clear the map to start a new substring
        }
        else {
            map.set(char, (map.get(char) || 0) + 1); //add the character to the map
            //if character is not in the map, initialize count to 0 and add 1
            //if character is already in the map, increment its count by 1
        }
    }
    for (let i = 0; i < s.length; i++) { //iterate through the string again
        if (maxLength.get(i) != null && maxLength.get(i) > longest) { //check if the count of the character at index i is greater than longest
            longest = maxLength.get(i); //update longest
        }
    }

    return longest; //return the length of the longest substring
}

// approach 2: sliding window with set  
var lengthOfLongestSubstring2 = function (s) {
    let set = new Set(); //to store characters in the current substring         
    let left = 0;  //left pointer of the sliding window
    let maxLength = 0; //to store the length of the longest substring

    for (let right = 0; right < s.length; right++) { //right pointer of the sliding window
        let char = s.charAt(right); //get the character at index right
        while (set.has(char)) { //if character is already in the set, move the left pointer to the right
            set.delete(s.charAt(left)); //remove the character at index left from the set 
            left++; //move the left pointer to the right
        }
        set.add(char); //add the character at index right to the set
        maxLength = Math.max(maxLength, set.size); //update the length of the longest substring
    }

    return maxLength; //return the length of the longest substring
}

//  approach 3: optimized sliding window with hashmap and indices
var lengthOfLongestSubstring3 = function (s) {
    let map = new Map(); //to store the last index of each character
    let start = 0; //start index of the current substring
    let maxLen = 0; //to store the length of the longest substring
    // iterate through the string while updating the start index and max length
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) { //if character is already in the map and its last index is greater than or equal to start
            start = map.get(s[i]) + 1; //move the start index to the next character after the last occurrence of the repeating character
        }

        map.set(s[i], i); //update the last index of the character
        maxLen = Math.max(maxLen, i - start + 1); //update the length of the longest substring by calculating the current substring length
        // i - start + 1 gives the length of the current substring
    }

    return maxLen;
};