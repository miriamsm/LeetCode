
public class FrogRiverOne {

    public static int earliestTime(int X, int[] A) {
        for (int i = 0; i < A.length; i++) { // iterate through each element in the array
            if (A[i] == X) { // check if the element matches X
                return i;   // Return the index if found
            }
        }
        return -1; // Not all positions covered
    }

    public static void main(String[] args) {
        int X = 5;
        int[] A = {1, 3, 1, 5, 2, 3, 5, 4};
        System.out.println(earliestTime(X, A)); // 6
    }
}
