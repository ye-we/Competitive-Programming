var threeSumMulti = function(A, target) {
const kMod = 1000000007;
let sol = 0;
let count = new Map();

for (let i = 0; i < A.length; i++) {
if (!count.has(A[i])) {
count.set(A[i], 1);
} else {
count.set(A[i], count.get(A[i]) + 1);
}
}

for (let [i, x] of count) {
for (let [j, y] of count) {
let k = target - i - j;
if (!count.has(k)) {
continue;
}
if (i === j && j === k) {
sol = (sol + (x * (x - 1) * (x - 2)) / 6) % kMod;
} else if (i === j && j !== k) {
sol = (sol + (x * (x - 1) / 2) * count.get(k)) % kMod;
} else if (i < j && j < k) {
sol = (sol + x * y * count.get(k)) % kMod;
}
}
}

return sol % kMod;
};
