var merge = function(intervals) {
    // sort the intervals wrt their first element
    intervals.sort((a,b)=>a[0]-b[0]);
    let result = [];
    let start_interval = intervals[0];
    result.push(start_interval)
    intervals.forEach((interval,i)=>{
       start_end = start_interval[1];
       current_start = interval[0];
       current_end = interval[1];
       if(start_end >= current_start){
           result[result.length - 1][1] = Math.max(start_end,current_end);
       }
       else{
           start_interval = interval;
           result.push(start_interval);
       }
    })
    return result;
};
