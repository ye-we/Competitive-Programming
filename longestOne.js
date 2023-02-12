var longestOnes = function(A, K) {
    let sol = 0;
    let l = 0;
    for (let r = 0; r < A.length; r++) {
        if (A[r] === 0) {
            K--;
        }
        while (K < 0) {
            if (A[l] === 0) {
                K++;
            }
            l++;
        }
        sol = Math.max(sol, r - l + 1);
    }
    return sol;
};
