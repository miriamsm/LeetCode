
class isPalindrome {

    public boolean isPalindrome(int x) {
        if (x < 0) { // negative numbers are not palindromes
            return false; // return false immediately
        }
        String xStr = Integer.toString(x); // convert integer to string
        String y = ""; // initialize empty string to hold reversed version
        // iterate through string in reverse order
        for (int i = xStr.length() - 1; i >= 0; i--) { 
            y += xStr.charAt(i); // build reversed string
        }
        return xStr.equals(y); // check if original string equals reversed string
    }

    public static void main(String[] args) {
        isPalindrome solution = new isPalindrome();
        int testValue = 412214;
        boolean result = solution.isPalindrome(testValue);
        System.out.println("Is " + testValue + " a palindrome? " + result);
    }

}
