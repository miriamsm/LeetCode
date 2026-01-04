/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) { // Quick check on length
        return false;
    }
    else {
        const charCount = {}; // Object to count occurrences of each character
        for (let i = 0; i < s.length; i++) {//  Count characters in string s
            const char = s[i]; // Get the character at index i
            charCount[char] = (charCount[char] || 0) + 1;// Increment the count for this character
        }
        for (let i = 0; i < t.length; i++) {// Decrease the count for characters in string t
            const char = t[i];// Get the character at index i
            if (!charCount[char]) {// If the character is not found or count is zero, return false
                return false;
            }
            charCount[char]--; // Decrement the count for this character
        }
        return true;
    }

};
