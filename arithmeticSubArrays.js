var checkArithmeticSubarrays = function(nums, l, r) {
    let result = [];
    let subArrays = [];
    // populate the sub arrays based on all queries
    for(let i=0; i<l.length; i++){
        let tempArr = [];
        for(let j=l[i]; j<=r[i]; j++){
             tempArr.push(nums[j])
        }
        subArrays.push(tempArr)
    }
    // sort each sub array and check whether or not consecutive elements of the sub array has the same difference
    subArrays.forEach((arr)=>{
        arr.sort((a,b)=>a-b)
        let tempState = true;
        for(let i=0;i<arr.length-2;i++){
         if(arr[i+1]-arr[i] !== arr[i+2] - arr[i+1]){
             tempState = false;
         }
        }
        result.push(tempState)
    })
    return result;
};
