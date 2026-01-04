/**
 * @param {string} s
 * @return {boolean}
 */
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
