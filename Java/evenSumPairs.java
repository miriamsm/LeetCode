public class evenSumPairs {

    

public static int calcEvenSumPairs(int[] arr) {
    int odd = 0;
    int even = 0;

    for (int i=0, len=arr.length; i < len; i++) {
        if (arr[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }

    return (odd / 2) + (even / 2);
}
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        System.out.println(calcEvenSumPairs(arr)); // Output: 3
    }
}