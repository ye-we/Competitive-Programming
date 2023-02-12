var maxScore = function(cardPoints, k) {
  let n = cardPoints.length;
  let summ = cardPoints.reduce((acc, cur) => acc + cur, 0);
  let windowSum = cardPoints.slice(0, n - k).reduce((acc, cur) => acc + cur, 0);
  let sol = summ - windowSum;

  for (let i = 0; i < k; i++) {
    windowSum -= cardPoints[i];
    windowSum += cardPoints[i + n - k];
    sol = Math.max(sol, summ - windowSum);
  }

  return sol;
};
