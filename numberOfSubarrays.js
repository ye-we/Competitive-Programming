var numberOfSubarrays = function(nums, k) {
    let length = nums.length;
    let niceSubarrays = 0;
    let counter = 0;
    let left = 0;
    let right = 0;
    while (right < length) {
        while (right < length && counter != k) {
            if (nums[right] % 2 == 1) {
                counter += 1;
            }
            right += 1;
        }
        if (counter != k && right == length) {
            return niceSubarrays;
        }
        let l = r = 1;
        while (nums[left] % 2 == 0) {
            left += 1;
            l += 1;
        }
        left += 1;
        counter -= 1;
        while (right < length && nums[right] % 2 == 0) {
            right += 1;
            r += 1;
        }
        niceSubarrays += r * l;
    }

    return niceSubarrays;
}
