
public class firstIndexOfX {

    public static int findFirstIndexOfX(int A[], int X) {
        for (int i = 0; i < A.length; i++) { // iterate through each element in the array
            if (A[i] == X) { // check if the element matches X
                System.out.println(i); // Output the index
                return i; // Return the index if found
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
