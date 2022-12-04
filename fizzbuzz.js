const fizzBuzz = function(n) {
    let answer=[];
    for(let i=1; i<=n; i++){
        const val = (i%3===0 && i%5==0) ? "FizzBuzz": (i%3===0) ? "Fizz":(i%5===0)? "Buzz":i+"";
        answer.push(val)
    }
    return answer;
};
fizzBuzz(15);
