
public class findUnique {

    public static int count(int[] arr) {
        java.util.HashMap<Integer, Integer> freq = new java.util.HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            if (freq.containsKey(arr[i])) {
                freq.put(arr[i], freq.get(arr[i]) + 1);
            } else {
                freq.put(arr[i], 1);
            }
        }

        for (int key : freq.keySet()) {
            if (freq.get(key) == 1) {
                return key;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {9, 3, 9, 3, 9, 7, 9};
        System.out.println(count(arr)); // Output: 3 (unique elements are 1, 3, and 5)
    }
}
