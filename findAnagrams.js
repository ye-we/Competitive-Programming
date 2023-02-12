var findAnagrams = function(s, p) {
    let s_len = s.length;
    let p_len = p.length;
    
    if(s.length < p.length) return [];
    
    let freq_p = Array(26).fill(0);
    let window = Array(26).fill(0);
    
    //first window
    for(let i=0;i<p_len;i++){
        freq_p[p.charCodeAt(i) - 97]++;
        window[s.charCodeAt(i) - 97]++;
    }
    
    let ans = [];
    if(arraysEqual(freq_p, window)) ans.push(0);
    
    for(let i=p_len;i<s_len;i++){
        window[s.charCodeAt(i-p_len) - 97]--;
        window[s.charCodeAt(i) - 97]++;
        
        if(arraysEqual(freq_p, window)) ans.push(i-p_len+1);
    }
    return ans;
}

function arraysEqual(a1, a2) {
    return JSON.stringify(a1) == JSON.stringify(a2);
}
