var pancakeSort = function(arr) {
    console.log(arr.indexOf(Math.max(...arr)))
    let results=[];
    while (arr.length > 0) {
        let maxIndex = arr.indexOf(Math.max(...arr)); 
        if(arr.length === 2){
            if(arr.indexOf(Math.max(...arr)) === 1) return results;
            else {
                results.push(1);
                return results;
            }
        }
        if(maxIndex === arr.length-1){
            arr.pop();
            continue;
        }
        if(maxIndex === 0){
           for(let i = 0; i<=maxIndex; i++){
                let temp1 = arr[maxIndex];
                arr[maxIndex] = arr[0];
                arr[i] = temp1;
                maxIndex-=1;   
            }
            arr.pop();
            continue;
        }
        else{
            results.push(maxIndex+1)
            for(let i = 0; i<=maxIndex; i++){
                let temp1 = arr[maxIndex];
                arr[maxIndex] = arr[i];
                arr[i] = temp1;
                maxIndex-=1;   
            }
            for(let i = 0; i<arr.length/2; i++){
                let temp = arr[arr.length-i-1];
                arr[arr.length-1-i] = arr[i];
                arr[i] = temp;
            }
            results.push(arr.length)
            arr.pop();
        }
    }
    return results;
};
