var numIdenticalPairs = function(nums) {
    let result = 0;
    // compare each number with the rest of the numbers exluding the ones before the current number
    for(let i=0;i<nums.length;i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]==nums[j]){
                result+=1;
            }
        }
    }
    return result;
};
