var rearrangeArray = function(nums) {
    // sort array in increasing order 
    nums.sort((a,b)=>a-b)
    // rearrange the array in a way (min, max, next min, next max....), this works
    // because every consecutive elements will be either less than both their
    // neighbors or greater than both their neighborings
    let result = [];
    while(nums.length > 0){
    if(nums.length === 1){
        result.push(nums[0])
        break;
      }
      result.push(Math.min(...nums))
      result.push(Math.max(...nums))
      nums.shift();
      nums.pop();
    }
   
