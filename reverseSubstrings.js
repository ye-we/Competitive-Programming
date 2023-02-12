const reverseParentheses = function(s) {
    let st = [];
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ')') {
            st.push(s[i]);
        } else {
            let temp = "";
            while (st.length > 0 && st[st.length - 1] !== '(') {
                temp += st[st.length - 1];
                st.pop();
            }
            if (st.length > 0 && st[st.length - 1] === '(') st.pop();
            for (let i = 0; i < temp.length; i++) {
                st.push(temp[i]);
            }
        }
    }
    while (st.length > 0) {
        res += st[st.length - 1];
        st.pop();
    }
    return res.split('').reverse().join('');
};
