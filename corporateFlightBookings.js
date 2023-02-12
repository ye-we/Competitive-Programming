var corpFlightBookings = function(bookings, n) {
  let sol = Array(n).fill(0);

  for (let booking of bookings) {
    sol[booking[0] - 1] += booking[2];
    if (booking[1] < n) {
      sol[booking[1]] -= booking[2];
    }
  }

  for (let i = 1; i < n; i++) {
    sol[i] += sol[i - 1];
  }

  return sol;
}
