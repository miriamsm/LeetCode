public class frogJump {
    public static int earliestTime(int X, int y, int D) {
        
        // calculate the number of jumps needed to reach or exceed position y by jumping distance D from position X
        // Use ceiling to account for any remaining distance that requires an additional jump
        // Example: If (y - X) is 55 and D is 30, (y - X) / D = 1.83, ceiling gives 2 jumps needed
        int jumps = (int) Math.ceil((double)(y- X ) / D);  
        return Math.abs(jumps); // return the absolute value of jumps
    }
    public static void main(String[] args) {
        int X = 10;
        int y = 85;
        int D = 30;
        System.out.println(earliestTime(X, y,D)); // 3    
    }
}
