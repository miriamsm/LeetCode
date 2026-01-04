public class evenSumPairs {

    

public static int calcEvenSumPairs(int[] arr) {
    int odd = 0; 
    int even = 0;

    for (int i=0, len=arr.length; i < len; i++) { // iterate through each element in the array
        if (arr[i] % 2 == 0) { // check if the element is even
            even++; // increment even count
        } else {
            odd++; // increment odd count
        }
    }

    return (odd / 2) + (even / 2); // calculate pairs from even and odd counts
}
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        System.out.println(calcEvenSumPairs(arr)); // Output: 3
    }
}