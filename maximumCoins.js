var maxCoins = function(piles) {
    // sort the array in decreasing order and pick every n+2 element, n=1,2,3,4....
    piles.sort((a,b)=> b-a);
    let maxCoin=0;
    let counter = 1;
    for(let i=0; i<piles.length/3; i++){
       maxCoin+=piles[counter];
       counter+=2;
    }
    return maxCoin;
};
