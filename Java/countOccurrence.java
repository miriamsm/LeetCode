public class countOccurrence {

    public static int countOccurrences(int[] arr, int target) {
        int count = 0;
        for (int i=0; i < arr.length; i++) {
            if (arr[i] == target) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 2, 5};
        int target = 2;
        System.out.println(countOccurrences(arr, target)); // Output: 3
    }
}