var totalFruit = function(tree) {
    let sol = 0;
    let count = new Map();

    let l = 0;
    for (let r = 0; r < tree.length; r++) {
        count.set(tree[r], (count.get(tree[r]) || 0) + 1);
        while (count.size > 2) {
            count.set(tree[l], count.get(tree[l]) - 1);
            if (count.get(tree[l]) === 0) {
                count.delete(tree[l]);
            }
            l++;
        }
        sol = Math.max(sol, r - l + 1);
    }

    return sol;
}
