/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */


// sort an array and return string array
var sortInPlace = (arr)=>{
    for(let i = 1; i<arr.length; i++){
    let temp = arr[i];
    let j = i-1;
    while(j>=0 && greaterThan(arr[j], temp)){
     arr[j+1] = arr[j];
     j--;
    } 
    arr[j+1] = temp;
 }
 return arr;
}
// custom comparing numbers since js gets weird with numbers if they're too big
function greaterThan(str1, str2){
    if(str1.length <= 16 && str2.length<=16 ){
        return str1*1 > str2 * 1;
    }
    if(str1.length > str2.length){
        return true;
    }
    if(str1.length < str2.length){
        return false;
    }
    // 123422234432123456786543 
    // len = 36
    
    let len = str1.length
    let slicer = 0;
    let results = [];
    while(len > 0){
        if(len / 16 >= 1){
            let str1Temp = str1.slice(slicer,slicer+16)
            let str2Temp = str2.slice(slicer,slicer+16)
            if(len === str1.length){
              if(str1Temp*1 < str2Temp*1){
                  return false;
              }
              if(str1Temp*1 > str2Temp*1){
                  return true;
              }
              else{
              results.push(str1Temp*1 >= str2Temp*1)                     
              }            
            }
            else{
              if(results[results.length-1] === false && str1Temp*1 <= str2Temp*1){
                  return false;
              }
            }
            len-=16;
            // len 20
            // slicer 16
            slicer+=16;
        }
        else{
         str1Temp = str1.slice(slicer,str1.length+1)
         str2Temp = str2.slice(slicer,str2.length+1)
         return str1Temp*1 > str2Temp*1; 
        }
    }
    return true;
}
var kthLargestNumber = function(nums, k) {
    nums = sortInPlace(nums);
    return nums[nums.length - k]
};
