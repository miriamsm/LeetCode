import java.util.Stack;

public class BalancedBrackets {

    public static boolean isBalanced(String s) {
        Stack<Character> stack = new Stack<>(); // stack to keep track of opening brackets

        for (char c : s.toCharArray()) { // iterate through each character in the string
            if (c == '(' || c == '{' || c == '[') { // if it's an opening bracket
                stack.push(c); // push it onto the stack
            } else if (c == ')' || c == '}' || c == ']') { // if it's a closing bracket
                if (stack.isEmpty()) { // if stack is empty, no matching opening bracket
                    return false;
                }

                char top = stack.pop(); // pop the top element from the stack

                if ( (c == ')' && top != '(') ||
                     (c == '}' && top != '{') ||
                     (c == ']' && top != '[') ) { // check for matching pairs
                    return false; // brackets do not match
                }
            }
        }

        return stack.isEmpty(); // it checks if stack is empty, all brackets were balanced if not, return false
    }

    public static void main(String[] args) {
        System.out.println(isBalanced("()[]{}"));   // true
        System.out.println(isBalanced("([{}])"));   // true
        System.out.println(isBalanced("(]"));       // false
        System.out.println(isBalanced("([)]"));     // false
        System.out.println(isBalanced("((("));      // false
    }
}
