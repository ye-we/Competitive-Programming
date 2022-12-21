const smallerNumbersThanCurrent = function(nums) {
    // declare empty array to be populated by the outputs later
    let output = [];
    // iterate over each number and again iterate over those numbers and
    // when we find a number in the nested loop less than the current number
    // we are iterating over, increment our counter
    nums.forEach(num=>{
    // reset the counter
        let counter = 0;
        nums.forEach(n=>{
            if(n<num){
                counter++;
            }
        })
    // push that counter to our output
        output.push(counter);
    })
    return output;
};
