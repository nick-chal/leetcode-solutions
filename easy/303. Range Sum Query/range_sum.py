class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def sumRange(self, left: int, right: int) -> int:
        return sum(self.nums[left : right + 1])


obj = NumArray([-2, 0, 3, -5, 2, -1])
param_1 = obj.sumRange(0, 2)
