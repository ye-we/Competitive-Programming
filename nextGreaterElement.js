var nextGreaterElement = function(nums1, nums2) {
    if (!nums1 || !nums2) return [];
    let result = [];
    let nums2_dic = {};
    for (let i = 0; i < nums2.length; i++) {
        nums2_dic[nums2[i]] = i;
    }
    for (let nums of nums1) {
        let index = nums2_dic[nums] + 1;
        while (index < nums2.length && nums >= nums2[index]) {
            index++;
        }
        if (index === nums2.length) {
            result.push(-1);
        } else {
            result.push(nums2[index]);
        }
    }
    return result;
};
