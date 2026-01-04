/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// Approach 1: Sorting and Comparing (wrong because it doesn't account for character counts properly)
var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort().join(''); //sort both strings
    magazine = magazine.split('').sort().join('');
    //compare each character of both strings for the length of ransomNote because if ransomNote is longer, it cannot be constructed from magazine
    for (let i = 0; i < ransomNote.length; i++) {
        if (!(ransomNote.charAt(i) == magazine.charAt(i))) { //if any character does not match
            return false; //return false
        }
    }
    return true; //if all characters match, return true
};

// Approach 2: Two Pointers after Sorting (slower but correct)
var canConstruct2 = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort().join('');
    magazine = magazine.split('').sort().join('');
    let i = 0, j = 0;
    // two pointers to traverse both strings it will stop if we reach the end of either string
    while (i < ransomNote.length && j < magazine.length) {
        if (ransomNote[i] === magazine[j]) { // characters match
            i++; // matched one character
        }
        j++; // move magazine pointer forward
    }

    return i === ransomNote.length; // check if all characters in ransomNote were matched

};