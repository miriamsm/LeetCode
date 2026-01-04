public class frogJump {
    public static int earliestTime(int X, int y, int D) {
        int jumps = (int) Math.ceil((double)(y- X ) / D); 
        return Math.abs(jumps);
    }
    public static void main(String[] args) {
        int X = 10;
        int y = 85;
        int D = 30;
        System.out.println(earliestTime(X, y,D)); // 3    
    }
}
