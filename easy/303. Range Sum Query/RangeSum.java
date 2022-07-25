// import java.util.Arrays;

public class RangeSum {

    static class NumArray {

        private int[] nums;

        public NumArray(int[] nums) {
            this.nums = nums;
        }

        public int sumRange(int left, int right) {
            // return Arrays.stream(Arrays.copyOfRange(this.nums, left, right + 1)).sum();

            int sum = 0;

            for (int i = left; i <= right; i++) {
                sum += this.nums[i];
            }

            return sum;
        }
    }

    public static void main(String[] args) {

        NumArray numArray = new NumArray(new int[] { -2, 0, 3, -5, 2, -1 });
        numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
        numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
        numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

    }
}
