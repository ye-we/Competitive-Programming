var minSetSize = function(arr) {
  let arrObj={};
  let entriesCount = [];
  let minSize = 0;
  arr.forEach((num)=>{
      if(arrObj[num]) arrObj[num] +=1;
      else arrObj[num] = 1;
  })
  for(entry in arrObj){
      entriesCount.push(arrObj[entry])
  }
  entriesCount.sort((a,b)=>b-a);
  let tempCounter = entriesCount[0];
  console.log(tempCounter)
  for(let i=1; i<=entriesCount.length; i++){
    if(tempCounter >= arr.length/2){
          console.log("here")
          return i;
      }
      tempCounter+=entriesCount[i];
  }
}
