
import java.util.HashMap;

public class OddOccurence {

    public static int findOddOccurrence(int[] arr) {
        HashMap<Integer, Integer> freq = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            if (freq.containsKey(arr[i])) {
                freq.put(arr[i], freq.get(arr[i]) + 1);
            } else {
                freq.put(arr[i], 1);
            }
        }
        for (int key : freq.keySet()) {
            if (freq.get(key) % 2 != 0) {
                return key;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 3, 1, 3};
        System.out.println(findOddOccurrence(arr)); // Output: 3
    }
}
