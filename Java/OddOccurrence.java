
import java.util.HashMap;

public class OddOccurrence {

    public static int findOdd(int[] A) {
        HashMap<Integer, Integer> countMap = new HashMap<>();

        // Step 1: Count occurrences
        for (int num : A) {
            if (countMap.containsKey(num)) {
                countMap.put(num, countMap.get(num) + 1);
            } else {
                countMap.put(num, 1);
            }

        }

        // Step 2: Find the number with odd occurrences
        for (int key : countMap.keySet()) {
            if (countMap.get(key) % 2 != 0) {
                return key;
            }
        }

        // If all are even (should not happen based on problem description)
        return -1;
    }

    public static void main(String[] args) {
        int[] A = {9, 3, 9, 3, 9, 7, 9};
        System.out.println(findOdd(A)); // Output: 7
    }
}
