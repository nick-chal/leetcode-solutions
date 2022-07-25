public class MaxProduct {

    static class Solution {
        static public int maxProduct(int[] nums) {
            int result = Integer.MIN_VALUE;
            int localMax = 1;
            int localMin = 1;

            for (int i : nums) {
                if (i == 0) {
                    localMax = 1;
                    localMin = 1;
                    result = Math.max(i, result);
                    continue;
                }

                int tempMax = localMax;
                localMax = Math.max(Math.max(i * localMax, i * localMin), i);
                localMin = Math.min(Math.min(i * tempMax, i * localMin), i);

                result = Math.max(localMax, result);
            }

            return result;
        }
    }

    public static void main(String[] args) {
        System.out.println(Solution.maxProduct(new int[] { 2, 3, -2, 3 }));
    }
}