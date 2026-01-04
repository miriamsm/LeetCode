
import java.util.Arrays;

public class MaxCountersCorrect {

    public static int[] maxCounters(int N, int[] arr) {
        int[] arr2 = new int[N];
        int maxValue = 0;
        int lastUpdate = 0;

        for (int i = 0; i < arr.length; i++) {
            int index = arr[i];

            if (index > N) {
                // Lazy update: record the max value
                lastUpdate = maxValue;
            } else if (index >= 1 && index <= N) {
                // Apply lazy update if needed
                if (arr2[index - 1] < lastUpdate) {
                    arr2[index - 1] = lastUpdate;
                }

                arr2[index - 1] += 1;

                if (arr2[index - 1] > maxValue) {
                    maxValue = arr2[index - 1];
                }
            }
        }

        // Apply any remaining lazy updates
        for (int i = 0; i < N; i++) {
            if (arr2[i] < lastUpdate) {
                arr2[i] = lastUpdate;
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
