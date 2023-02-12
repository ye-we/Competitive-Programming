var PredictTheWinner = function(nums) {
  if (nums.length % 2 === 0) return true;

  function helper(nums, l, r) {
    if (l === r) return nums[l];
    let a = nums[l] - helper(nums, l + 1, r);
    let b = nums[r] - helper(nums, l, r - 1);

    return Math.max(a, b);
  }

  return helper(nums, 0, nums.length - 1) >= 0;
}
