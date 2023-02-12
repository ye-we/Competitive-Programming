var compress = function(chars) {
    let counter = 1;
    let i = 0;
    let j = 1;
    let ans = [];
    while (j < chars.length) {
        if (chars[i] === chars[j]) {
            counter += 1;
            if (j + 1 < chars.length && chars[j + 1] !== chars[j]) {
                chars[j] = `${counter}`;
                j += 2;
                i += 2;
                counter = 1;
                continue;
            }
            if (j + 1 >= chars.length) {
                chars[j] = `${counter}`;
                break;
            }
            chars.splice(j, 1);
        } else {
            j += 1;
            i += 1;
        }
    }
    i = 0;
    while (i < chars.length) {
        if (chars[i].length > 1) {
            for (let j of chars[i]) {
                ans.push(j);
            }
            i += 1;
        }
        if (i < chars.length) {
            ans.push(chars[i]);
            i += 1;
        }
    }
    for (let i = 0; i < ans.length; i++) {
        if (i >= chars.length) {
            chars.push(ans[i]);
        } else {
            chars[i] = ans[i];
        }
    }
    return chars.length;
};
