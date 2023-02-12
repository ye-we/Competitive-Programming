var carFleet = function(target, position, speed) {
    let cars = Array.from(position, (_, i) => [position[i], speed[i]])
        .sort((a, b) => a[0] - b[0]);
    let times = cars.map(([p, s]) => (target - p) / s);
    let fleet = 0;
    while (times.length > 1) {
        let lead = times.pop();
        if (lead < times[times.length - 1]) {
            fleet++;
        } else {
            times[times.length - 1] = lead;
        }
    }
    return fleet + times.length;
};
