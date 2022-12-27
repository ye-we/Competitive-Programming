
/**  this function returns the points sorted according to the increasing order of the
distances
*/
var doubleSort = function(distances,points){
    for(let i = 1; i< distances.length; i++){
    let temp = distances[i];
    let pointsTemp = points[i];
    let j = i-1;
    while(j>=0 && distances[j] > temp){
     distances[j+1] = distances[j];
     points[j+1] = points[j];
     j--;
    } 
    distances[j+1] = temp;
    points[j+1] = pointsTemp;
 }
 return points;
}

var kClosest = function(points, k) {
    // empty array to later hold distances
    let distances = [];
    // find the distance of each points from the origin
    points.forEach((point,i)=>{
        const distance = Math.sqrt(point[0]**2 + point[1]**2);
    // store the distances in an array
        
        distances.push(distance);

    })

    // sort the points array based on their distances from the origin
    points = doubleSort(distances, points) 
    // the returned result holder
    let result = []
    // return the k points we want from the ordered array
    for(let i = 0; i<k;i++){
      result[i] = points[i];
    }
    return result;
};
