const sortArray = (arr) =>{
    return arr.sort(function(a,b){return a-b});
}

var targetIndices = function(nums, target) {
   // sort the input array
   const sortedNums = sortArray(nums);
   // array to hold the indicies of the target values, after it is sorted
   let targetIndicies = [];
   sortedNums.forEach((num,i)=>{
       if(num===target){
           // push a the index of the number in the sorted array whenever it is equal to the target array
           targetIndicies.push(i);
       }
   })
   return targetIndicies;
};

targetIndices([2,3,1,4], 3);
