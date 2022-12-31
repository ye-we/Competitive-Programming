var topKFrequent = function(nums, k) {
    let frequencyCount = {};
    // populate frequency counter with keys = ditinct numbers from nums, and the values of the keys are their respective frequency
    nums.forEach(num=>{
        if(frequencyCount[num]){frequencyCount[num]+=1}
        else{
            frequencyCount[num] = 1;
        }
    })
    let resultRaw = Object.keys(frequencyCount)
    // sort them based in incresing number of their frequency
    resultRaw.sort((a,b)=>frequencyCount[b]-frequencyCount[a])
    let result = []
    for(let i=0; i<k; i++){
        result.push(resultRaw[i]*1)
    }
    return result;
};
