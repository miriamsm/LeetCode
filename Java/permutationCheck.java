
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class permutationCheck {

    public static int isPermutation(int[] A) {
        int n = A.length;

        Set<Integer> set = Arrays.stream(A)
                .boxed()
                .collect(Collectors.toSet());
        int diff = set.size() - n;
        if (diff != 0) {
            return 0;
        }

        Arrays.sort(A);
        for (int i = 0; i < n; i++) {
            if (A[i] != i + 1) {
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
