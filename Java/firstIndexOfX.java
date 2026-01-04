
public class firstIndexOfX {

    public static int findFirstIndexOfX(int A[], int X) {
        for (int i = 0; i < A.length; i++) {
            if (A[i] == X) {
                System.out.println(i); // Output: 2
                return i;
            }
        }
        System.out.println(-1);
        return -1; // If X is not found
    }

    public static void main(String[] args) {
        int X = 3;
        int[] A = {1, 2, 3, 4, 3, 5};
        findFirstIndexOfX(A, X);

    }
}
