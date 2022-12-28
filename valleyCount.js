function countingValleys(steps, path) {
   let paths ={
        U:1,
        D:-1
    }
    let valleys = 0;
    let sum = 0;
    // split the string into array
    steps = steps.split("")
    for(let i=0; i<path; i++){
       // whenever there's uphill add 1 to the sum and for downhill -1
       // if the sum becomes zero, and it's previous value was -ve, it means it
       // was a valley, so add 1 to valleys
       if( sum<0 && sum+ paths[steps[i]] === 0){
           valleys+=1;
       }
      sum+=paths[steps[i]]
    }
    return valleys;
}
