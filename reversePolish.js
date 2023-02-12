var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
            stack.push(parseInt(tokens[i]));
        } else {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            if (tokens[i] === '+') {
                stack.push(operand2 + operand1);
            } else if (tokens[i] === '-') {
                stack.push(operand2 - operand1);
            } else if (tokens[i] === '*') {
                stack.push(operand2 * operand1);
            } else if (tokens[i] === '/') {
                stack.push(Math.trunc(operand2 / operand1));
            }
        }
    }
    return stack[stack.length - 1];
};
