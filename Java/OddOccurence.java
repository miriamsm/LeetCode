
import java.util.HashMap;

public class OddOccurence {

    public static int findOddOccurrence(int[] arr) {
        HashMap<Integer, Integer> freq = new HashMap<>(); // hashmap to store frequency of each element

        //again similar to countUnique but returns the element with odd occurrence instead of count
        
        for (int i = 0; i < arr.length; i++) { // iterate through each element in the array
            if (freq.containsKey(arr[i])) { // if element is already in hashmap, increment its count
                freq.put(arr[i], freq.get(arr[i]) + 1);
            } else {
                freq.put(arr[i], 1); // else, add element to hashmap with count 1
            }
        }
        for (int key : freq.keySet()) {
            if (freq.get(key) % 2 != 0) {  // if frequency is odd, it's the odd occurrence element
                return key; // return the odd occurrence element
            }
        }
        return -1; // return -1 if no odd occurrence element is found
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 3, 1, 3};
        System.out.println(findOddOccurrence(arr)); // Output: 3
    }
}
