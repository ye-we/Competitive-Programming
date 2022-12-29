var findOriginalArray = function(changed) {
  let result = []
  let filteredObj = {};
  // first sort the array in an increasing order
  changed.sort((a,b)=>(a-b))
  changed.forEach((num)=>{
      // if the current numbers half exists as a key in the object, and its value
      // is not equal to 0 (meaning we haven't found all the doubles for that entry),
      // push the half of the number to our result
      if(filteredObj[num/2] && filteredObj[num/2] !== 0) {
          filteredObj[num/2] -= 1;
          result.push(num/2)
      }
      else{
          // if the current number exists as a key in the object, increase its value by console
          // if it doesn't, set its value to one
          if(filteredObj[num]){filteredObj[num]+=1;}
          else filteredObj[num] = 1;
      }
  })
  if(result.length !== changed.length/2) return []
  return result;
};    
