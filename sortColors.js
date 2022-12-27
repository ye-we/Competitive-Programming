// since insertion sort has the in-place property
var sortColors = (colors)=>{
    for(let i = 1; i< colors.length; i++){
    let temp = colors[i];
    let j = i-1;
    while(j>=0 && colors[j] > temp){
     colors[j+1] = colors[j];
     j--;
    } 
    colors[j+1] = temp;
 }
}
