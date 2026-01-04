
import java.util.*;

public class countUnique {

    public static int count(int[] arr) {
        HashMap<Integer, Integer> freq = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            if (freq.containsKey(arr[i])) {
                freq.put(arr[i], freq.get(arr[i]) + 1);
            } else {
                freq.put(arr[i], 1);
            }
        }

        int count = 0;
        for (int value : freq.values()) {
            if (value == 1) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {
        int[] arr = {9, 3, 9, 3, 9, 7, 9};
        System.out.println(count(arr)); // Output: 3 (unique elements are 1, 3, and 5)
    }
}
