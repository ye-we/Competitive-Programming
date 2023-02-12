let normalizer = {
    "(":1,
    ")":-1,
    "[":2,
    "]":-2,
    "{":3,
    "}":-3
}

var isValid = function(s) {
    let stack = s.split('');
    if(stack.length <=1) return false;
    if(stack.length % 2 !== 0 ) return false;
    while(stack.length>1){
        let temp1 = normalizer[stack.pop()];
        let temp2 = normalizer[stack.pop()];
        if(temp1+temp2 !== 0 || temp1 > temp2){
            let temp3 = normalizer[stack.shift()];
            let temp4 = normalizer[stack.shift()];
            if(temp1+temp3 !== 0 || temp2 +temp4 !==0 || temp1>temp3 || temp2>temp4){
                return false
            }
        }
    }
    return true;
}
