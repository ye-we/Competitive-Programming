var productExceptSelf = function (nums){
    const length = nums.length;
    let result = new Array(length).fill(1);
    for (let i = 1; i < length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    for (let i = length - 2; i >= 0; i--) {
        result[i] *= nums[i + 1];
        nums[i] *= nums[i + 1];
    }

    return result;
}
