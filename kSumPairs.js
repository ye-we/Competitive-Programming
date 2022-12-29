var maxOperations = function(nums, k) {
    let numsObj = {}
    let operationsCount = 0;
    nums.forEach(num=>{
        // if k-num exists as a key in the object, that means one pair is found, so add 1 to the counter, and decrement the number of entry of that number
        if(numsObj[k-num] && numsObj[k-num] !== 0 ){
            numsObj[k-num] -=1;
            operationsCount+=1;
        }
        else{
            // if the number exists as a key in the object, add one to its value, otherwise set it to one
            if(numsObj[num]){numsObj[num]+=1}
            else{numsObj[num]=1}
        }
    })
    return operationsCount;
};
