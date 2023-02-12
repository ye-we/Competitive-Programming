var dailyTemperatures = function(T) {
    let length = T.length;
    let res = Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (T[i] < T[j]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
};
