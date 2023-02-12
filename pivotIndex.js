var pivotIndex = function(nums) {
    if (nums.length === 0) {
        return -1;
    }

    if (nums.slice(1).reduce((a, b) => a + b, 0) === 0) {
        return 0;
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums.slice(0, i + 1).reduce((a, b) => a + b, 0) === nums.slice(i).reduce((a, b) => a + b, 0)) {
                return i;
            }
        }
    }
    return -1;
};
