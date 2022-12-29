const minFlagstone = (m,n,a) =>{
    let counter = 0;
    for(let i=0;i<m;i+=a){
        for(let j=0; j<n; j+=a){
            counter+=1;
        }
    }
    return counter;
}
