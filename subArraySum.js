var subarraySum = function(nums, k) {
    let prefixSum = [nums[0]];
    let length = nums.length;
    let count = 0;
    let countDict = {};
    countDict[prefixSum[0]] = 1;
    if (prefixSum[0] === k) {
        count += 1;
    }
    for (let i = 1; i < length; i++) {
        prefixSum.push(prefixSum[i - 1] + nums[i]);
        if (prefixSum[i] === k) {
            count += 1;
        }
        count += countDict[prefixSum[i] - k] || 0;
        countDict[prefixSum[i]] = (countDict[prefixSum[i]] || 0) + 1;
    }

    return count;
};
