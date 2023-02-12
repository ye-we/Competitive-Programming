var removeKdigits = function(num, k) {
    let stack = [];
    let remain = num.length - k;
    for (let number of num) {
        while (k && stack.length && stack[stack.length - 1] > number) {
            stack.pop();
            k--;
        }
        stack.push(number);
    }
    return (
        stack
            .slice(0, remain)
            .join('')
            .replace(/^0+/, '') || '0'
    );
};
