
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class permutationCheck {

    public static int isPermutation(int[] A) {
        int n = A.length; // Length of the array

        // Collect unique elements into a set by converting the array to a set 
        // to remove duplicates 
        Set<Integer> set = Arrays.stream(A) 
                .boxed()
                .collect(Collectors.toSet());
        int diff = set.size() - n; // Compare size of set with length of array
        if (diff != 0) { // If sizes differ, not a permutation
            return 0; 
        }

        Arrays.sort(A); // Sort the array
        for (int i = 0; i < n; i++) { // Check if each element matches its expected value
            if (A[i] != i + 1) { // Expected value is i + 1
                return 0; // Not a permutation
            }
        }

        return 1; // Is a permutation
    }

    public static void main(String[] args) {
        int[] A = {4, 1, 3};
        System.out.println(isPermutation(A)); // Output: 1
    }
}
