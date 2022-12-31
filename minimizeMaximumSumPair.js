var minPairSum = function(nums) {
    let results = [];
    let maxSum = 0;
    // sort the numbers in increasing order
    nums.sort((a,b)=>a-b)
    // pair the numbers so that their sum won't produce the maximum sum. [[max,min],[nextMax,nextMin]...] 
    for(let i=0; i<nums.length/2; i++){
        results.push([nums[i],nums[nums.length-1-i]])
    }
    results.forEach((nums)=>{
        if(nums[1] + nums[0] > maxSum){
            maxSum = nums[0] + nums[1]
        }
    })
    return maxSum
};
