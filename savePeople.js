var numRescueBoats =  function (people, limit) {
  let start = 0;
  let end = people.length - 1;
  let counter = 0;
  
  people.sort((a, b) => a - b);
  
  while (end >= start) {
    if (start === end) {
      counter++;
      break;
    }
    
    if (people[start] <= limit - people[end]) {
      start++;
      end--;
      counter++;
      continue;
    } else {
      end--;
      counter++;
    }
  }
  
  return counter;
}
