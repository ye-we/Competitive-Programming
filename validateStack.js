var validateStackSequences = function(pushed, popped) {
  let stack = [];
  let index = 0;
  for (let push_value of pushed) {
    stack.push(push_value);
    while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++;
    }
  }
  return stack.length === 0;
};
