/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
    let numsSplitted=[];
    // separte all members of the nums array into single characters and append it to numsSplitted
    nums.forEach((num)=>{
        numsSplitted.push(...num+"".split(''))
    })
    numsSplitted.sort((a,b)=>b-a)
    return numsSplitted.join('')
};
