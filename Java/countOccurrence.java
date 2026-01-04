public class countOccurrence {

    public static int countOccurrences(int[] arr, int target) {
        int count = 0; // initialize count to zero
        for (int i=0; i < arr.length; i++) { // iterate through each element in the array 
            if (arr[i] == target) { // if the element matches the target, increment count
                count++; // increment count
            }
        }
        return count; // return the final count
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 2, 5};
        int target = 2;
        System.out.println(countOccurrences(arr, target)); // Output: 3
    }
}