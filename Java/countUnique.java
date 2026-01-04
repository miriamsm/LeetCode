
import java.util.*;

public class countUnique {

    public static int count(int[] arr) {
        HashMap<Integer, Integer> freq = new HashMap<>(); // hashmap to store frequency of each element

        for (int i = 0; i < arr.length; i++) { // iterate through each element in the array
            if (freq.containsKey(arr[i])) { // if element is already in hashmap, increment its count
                freq.put(arr[i], freq.get(arr[i]) + 1); // increment count
            } else {
                freq.put(arr[i], 1); // else, add element to hashmap with count 1
            }
        }

        int count = 0; // initialize count of unique elements
        for (int value : freq.values()) { // iterate through the frequency values
            if (value == 1) { // if frequency is 1, it's a unique element
                count++; // increment unique count
            }
        }

        return count; // return the count of unique elements
    }

    public static void main(String[] args) {
        int[] arr = {9, 3, 9, 3, 9, 7, 9};
        System.out.println(count(arr)); // Output: 3 (unique elements are 1, 3, and 5)
    }
}
