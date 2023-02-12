var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let minHeight = 0;
    let maxArea = 0;

    while (l < r) {
        minHeight = Math.min(height[l], height[r]);
        maxArea = Math.max(maxArea, minHeight * (r - l));
        
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }

    return maxArea;
}
