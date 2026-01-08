/**
 * @param {string} s
 * @return {boolean}
 */
// approach: use a stack to keep track of opening brackets
// when a closing bracket is encountered, check if it matches the top of the stack
// if it matches, pop the top of the stack
// if it doesn't match or the stack is empty, return false
// at the end, if the stack is empty, return true, otherwise return false
var isValid = function(s) {
    const stack = []; //to store opening brackets
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }; //mapping of closing brackets to opening brackets 
    // key: closing bracket, value: opening bracket 
    // pairs [')'] = '('    
    
    for (let i = 0; i < s.length; i++) { //iterate through the string
        const char = s[i]; //get the current character
        if (pairs[char]) { //if the character is a closing bracket
            //check if the stack is empty or the top of the stack doesn't match the corresponding opening bracket
            // meaning the brackets are not balanced 
            if (stack.length === 0 || stack.pop() !== pairs[char]) { 
                return false; //return false if not balanced
            }
        } else {
            stack.push(char); //if the character is an opening bracket, push it onto the stack
        }
    }
    //if the stack is empty, all brackets are balanced because every opening bracket had a matching closing bracket
    //and all of them were popped off the stack
    return stack.length === 0; //return true if the stack is empty (all brackets are balanced), otherwise return false
};