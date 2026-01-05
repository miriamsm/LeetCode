/**
 * @param {string} s
 * @return {boolean}
 */

// approach: two-pointer technique with helper function by deleting either characters that break the palindrome
var validPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize the string

    let j = s.length - 1; // Pointer for the end of the string

    for (let i = 0; i < j; i++) { // Iterate from the start to the middle of the string
        if (s[i] !== s[j]) {// Compare characters from start and end
            let substring = s.slice(0, j) + s.slice(j + 1); // Remove the character at index j
            let substring2 = s.slice(0, i) + s.slice(i + 1); // Remove the character at index i
            return isPalindrome(substring) || isPalindrome(substring2); // Check if either resulting substring is a palindrome

        }
        j--;
    }
    return true;
};
// Helper function to check if a string is a palindrome (same as in isPalindrome.js)
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize the string

    let j = s.length - 1; // Pointer for the end of the string

    for (let i = 0; i < j; i++) { // Iterate from the start to the middle of the string
        if (s[i] !== s[j]) {// Compare characters from start and end
            return false;
        }
        j--;
    }

    return true;
};