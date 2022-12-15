const sortSentence = function(s) {
    const strArr = s.split(" ");
    let indexes = [];
    strArr.forEach((str)=>{
        indexes.push(str[str.length-1]);
    })
    const newStrArr = strArr.map((arr)=>arr.slice(0,arr.length-1))
    let sortedSentence = [];
    for(let i = 0; i<indexes.length; i++){
        for(let j=0; j<indexes.length; j++){
            if(indexes[j]== i+1){
                sortedSentence.push(newStrArr[j]);
            }
        }
    }  
    return sortedSentence.join(" ");
  };
