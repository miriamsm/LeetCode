
import java.util.Arrays;

public class MaxCountersCorrect {

    public static int[] maxCounters(int N, int[] arr) {
        int[] arr2 = new int[N]; // initialize counters array with zeros the size of N
        int maxValue = 0; // track the maximum value of any counter
        int lastUpdate = 0; // track the last update value for lazy updates

        for (int i = 0; i < arr.length; i++) { // iterate through each operation in arr
            int index = arr[i]; // get the operation value

            if (index > N) { // if index is greater than N, it's a max counter operation
                // Lazy update: record the max value
                lastUpdate = maxValue; 
            } else if (index >= 1 && index <= N) { // if index is within the range of counters
                // Apply lazy update if needed
                if (arr2[index - 1] < lastUpdate) { // check if the current counter is less than last update
                    arr2[index - 1] = lastUpdate; // update it to last update value
                }

                arr2[index - 1] += 1; // increment the specific counter

                if (arr2[index - 1] > maxValue) { // update maxValue if needed
                    maxValue = arr2[index - 1]; // update maxValue
                }
            }
        }

        // Apply any remaining lazy updates
        for (int i = 0; i < N; i++) { // iterate through each counter
            if (arr2[i] < lastUpdate) { // if counter is less than last update
                arr2[i] = lastUpdate; // update it to last update value
            }
        }

        return arr2;
    }

    public static void main(String[] args) {
        int N = 5;
        int[] arr = {3, 4, 4, 6, 1, 4, 4};
        int[] result = maxCounters(N, arr);
        System.out.println(Arrays.toString(result)); // [3, 2, 2, 4, 2]
    }
}
