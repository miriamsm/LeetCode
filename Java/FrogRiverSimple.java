
public class FrogRiverSimple {

    public static int findXIndex(int X, int[] A) {
        for (int i = 0; i < A.length; i++) {
            if (A[i] == X) {
                return i; // Found X, return its index
            }
        }
        // If we reach here, X was never found
        return -1;
    }

    public static void main(String[] args) {
        int X = 5;
        int[] A = {1, 3, 1, 4, 2, 3, 5, 4};

        int result = findXIndex(X, A);
        System.out.println("First index where leaf falls at position X: " + result); // Output: 6
    }
}
