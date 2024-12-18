//https://leetcode.com/problems/construct-string-with-repeat-limit/description/

var repeatLimitedString = function (s, repeatLimit) {
  let sorted = [...s].sort().reverse();
  let containers = [];
  while (sorted.length) {
    let i = 1;
    while (sorted[0] === sorted[i]) {
      i++;
    }
    containers.push(sorted[0], i);
    sorted = sorted.slice(i);
  }

  while (containers.length) {
    let letter = containers[0];
    let nextLetter = containers[2];
    if (containers[1] - repeatLimit < 1) {
      let x = containers[1];
      while (x > 0) {
        sorted.push(letter);
        x--;
      }
      containers = containers.slice(2);
    } else {
      containers[1] = containers[1] - repeatLimit;
      let x = repeatLimit;
      while (x > 0) {
        sorted.push(letter);
        x--;
      }
      if (containers[3] <= 0 && containers[5]) {
        containers = containers.slice(0, 2).concat(containers.slice(4));
      }
      if (containers[3] > 0) {
        containers[3]--;
        sorted.push(containers[2]);
      } else {
        return sorted.join("");
      }
    }
  }
  return sorted.join("");
};
