import java.util.Arrays;

public class MissingNumber {

    // Test
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 5};
        System.out.println(findMissing(arr)); // Output: 1
    }

    public static int findMissing(int[] arr) {
        // If the array is empty, the missing number is 1
        if (arr.length == 0) {
            return 1;
        }

        // Step 1: Sort the array
        Arrays.sort(arr);

        // Step 2: Check each position
        for (int i = 0; i < arr.length; i++) {
            // Expected number at this index is i + 1
            if (arr[i] != i + 1) {
                return i + 1;
            }
        }

        // Step 3: If no missing number in the loop,
        // then it's the last number (N+1)
        return arr.length + 1;
    }
}
