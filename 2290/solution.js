const minimumObstacles = function (grid) {
  let leastBreaks = Infinity;
  const maxY = grid.length;
  const maxX = grid[0].length;
  const queueA = [[0, 0, 0]];
  const queueB = [[maxY - 1, maxX - 1, 0]];
  grid[0][0] = "A";
  grid[maxY - 1][maxX - 1] = "B";
  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  while (queueA.length) {
    let [y, x, breaks] = queueA.shift();
    let [y1, x1, breaks1] = queueB.length ? queueB.shift() : [0, 0, 0];
    for (const [z, z1] of directions) {
      const newY = y + z;
      const newX = x + z1;
      if (newY >= 0 && newY < maxY && newX >= 0 && newX < maxX) {
        if (String(grid[newY][newX]).includes("B")) {
          const breaksOnB = String(grid[newY][newX])[1]
            ? Number(String(grid[newY][newX]).slice(1))
            : 0;
          leastBreaks = Math.min(leastBreaks, breaks + breaksOnB);
        } else {
          if (grid[newY][newX] != "A") {
            if (grid[newY][newX] === 0) {
              queueA.unshift([newY, newX, breaks]);
              grid[newY][newX] = "A" + breaks;
            } else if (grid[newY][newX] === 1) {
              let temp = breaks;
              temp++;
              queueA.push([newY, newX, temp]);
              grid[newY][newX] = "A" + temp;
            }
          }
        }
      }
    }
    for (const [z, z1] of directions) {
      const newY = y1 + z;
      const newX = x1 + z1;
      if (newY >= 0 && newY < maxY && newX >= 0 && newX < maxX) {
        if (grid[newY][newX] != "B") {
          if (grid[newY][newX] === 0) {
            queueB.unshift([newY, newX, breaks1]);
            grid[newY][newX] = "B" + breaks1;
          } else if (grid[newY][newX] === 1) {
            let temp = breaks1;
            temp++;
            queueB.push([newY, newX, temp]);
            grid[newY][newX] = "B" + temp;
          }
        }
      }
    }
  }

  return leastBreaks;
};
