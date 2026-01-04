
class Solution {

    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        String xStr = Integer.toString(x);
        String y = "";
        for (int i = xStr.length() - 1; i >= 0; i--) {
            y += xStr.charAt(i);
        }
        return xStr.equals(y);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int testValue = 412214;
        boolean result = solution.isPalindrome(testValue);
        System.out.println("Is " + testValue + " a palindrome? " + result);
    }

}
