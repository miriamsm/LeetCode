
import java.util.ArrayList;
import java.util.List;

public class calcPossibleInstallmentsclaude {

    public String[] solution(int[] arr) {
        int loanAmount = arr[0];
        int maxInstallments = arr[1];
        int maxInstallmentAmount = arr[2];

        List<String> plans = new ArrayList<>();

        for (int numInstallments = 1; numInstallments <= maxInstallments; numInstallments++) {
            int totalAmount = loanAmount;

            if (numInstallments > 4) {
                totalAmount = (int) Math.floor(loanAmount * 1.10);
            }

            int baseInstallment = totalAmount / numInstallments;

            if (baseInstallment > maxInstallmentAmount) {
                continue;
            }

            int remainder = totalAmount % numInstallments;

            List<Integer> installments = new ArrayList<>();
            installments.add(baseInstallment + remainder);

            for (int j = 1; j < numInstallments; j++) {
                installments.add(baseInstallment);
            }

            plans.add(formatPlan(totalAmount, installments));
        }

        String[] result = new String[plans.size()];
        for (int i = 0; i < plans.size(); i++) {
            result[i] = plans.get(i);
        }
        return result;
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

    public static void main(String[] args) {
        calcPossibleInstallmentsclaude calculator = new calcPossibleInstallmentsclaude();
        int[] input = {100, 5, 40};
        String[] result = calculator.solution(input);
        for (String plan : result) {
            System.out.println(plan);
        }
    }
}
