var rotate = function (nums, k) {
  let n = nums.length;
  let output = Array(n).fill(0);

  for (let index = 0; index < n; index++) {
    let value = nums[index];
    output[(index + k) % n] = value;
  }

  for (let i = 0; i < n; i++) {
    nums[i] = output[i];
  }
}
