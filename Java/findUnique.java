
public class findUnique {

    public static int count(int[] arr) {
        java.util.HashMap<Integer, Integer> freq = new java.util.HashMap<>(); // hashmap to store frequency of each element
        
        // similar to countUnique but returns the unique element instead of the count

        for (int i = 0; i < arr.length; i++) { // iterate through each element in the array
            if (freq.containsKey(arr[i])) { // if element is already in hashmap, increment its count
                freq.put(arr[i], freq.get(arr[i]) + 1); // increment count
            } else {
                freq.put(arr[i], 1); // else, add element to hashmap with count 1
            }
        }

        for (int key : freq.keySet()) { // iterate through the keys in the hashmap
            if (freq.get(key) == 1) {   // if frequency is 1, it's the unique element
                return key; // return the unique element
            }
        }
        return -1; // return -1 if no unique element is found
    }

    public static void main(String[] args) {
        int[] arr = {9, 3, 9, 3, 9, 7, 9};
        System.out.println(count(arr)); // Output: 3 (unique elements are 1, 3, and 5)
    }
}
