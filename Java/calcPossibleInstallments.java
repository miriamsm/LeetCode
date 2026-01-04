
import java.util.ArrayList;
import java.util.List;

public class calcPossibleInstallments {

    public String[] solution(int[] arr) {
        int LoanAmount = arr[0];
        int MaxInstallments = arr[1];
        int MaxInstallmentAmount = arr[2];

        List<String> plan;
        plan = new ArrayList<>(MaxInstallments + 1);

        // if (MaxInstallments > 4) {
        //     LoanAmount = (int) Math.floor(LoanAmount * 1.10);
        // }

        return generatePlans(LoanAmount, MaxInstallments, MaxInstallmentAmount);
    }

    public String formatPlan(int totalAmount, List<Integer> installments) {
        StringBuilder sb = new StringBuilder();
        sb.append("(").append(totalAmount).append("){");

        for (int i = 0; i < installments.size(); i++) {
            sb.append(installments.get(i));
            if (i < installments.size() - 1) {
                sb.append(",");
            }
        }

        sb.append("}");
        return sb.toString();
    }

    public String[] generatePlans(int LoanAmount, int MaxInstallments, int MaxInstallmentAmount) {
        List<Integer> installments = new ArrayList<>();

        for (int i = 1; i <= MaxInstallments; i++) {
            if (i > 4) {
                LoanAmount = (int) Math.floor(LoanAmount * 1.10);
            }

            int installmentAmount = LoanAmount / MaxInstallments;
            int remainingAmount = LoanAmount % MaxInstallments;
            installments.add(installmentAmount + remainingAmount);
            for (int j = 1; j < MaxInstallments; j++) {
                installments.add(installmentAmount);
            }

        }
        List<String> plan = new ArrayList<>();

        plan.add(formatPlan(LoanAmount, installments));
        return plan.toArray(new String[0]);
    }

    public static void main(String[] args) {
        calcPossibleInstallments calculator = new calcPossibleInstallments();
        int[] input = {1000, 5, 300};
        String[] result = calculator.solution(input);
        for (String plan : result) {
            System.out.println(plan);
        }
    }
}
