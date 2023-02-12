var moveZeroes = function moveZeroes(nums) {
    let numberOfZeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            numberOfZeros++;
        } else if (numberOfZeros > 0) {
            nums[i - numberOfZeros] = nums[i];
            nums[i] = 0;
        }
    }
}
