# LeetCode Solutions

This repository contains my solutions to various coding challenges from LeetCode.

#Example 2290 

```javascript

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
//Optimized version by AI,  with custom deque (double‐ended queue) that provides O(1)O(1) amortized operations for adding and removing from both ends.
//
//// Custom Deque implementation with amortized O(1) operations.
class Deque {
  constructor() {
    this._data = [];
    this._head = 0;
    this._tail = 0;
  }
  
  // Add an item to the back.
  pushBack(item) {
    this._data[this._tail++] = item;
  }
  
  // Remove an item from the front.
  popFront() {
    if (this.isEmpty()) return undefined;
    const item = this._data[this._head];
    // Optionally clear reference for garbage collection.
    this._data[this._head] = undefined;
    this._head++;
    // Periodic cleanup to prevent the array from growing unbounded.
    if (this._head > 1000 && this._head * 2 >= this._tail) {
      this._data = this._data.slice(this._head, this._tail);
      this._tail = this._tail - this._head;
      this._head = 0;
    }
    return item;
  }
  
  // Add an item to the front.
  pushFront(item) {
    if (this._head > 0) {
      this._data[--this._head] = item;
    } else {
      // Fallback: if head is 0, we use unshift. This happens rarely if we plan cleanup well.
      this._data.unshift(item);
      this._tail++;
    }
  }
  
  // Check if the deque is empty.
  isEmpty() {
    return this._head === this._tail;
  }
}

function minimumObstacles(grid) {
  const m = grid.length;
  const n = grid[0].length;
  // Create a distance matrix filled with Infinity.
  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
  dist[0][0] = 0;

  // Use the custom deque for 0–1 BFS.
  const deque = new Deque();
  deque.pushBack([0, 0]);

  // Directions: right, down, left, up.
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (!deque.isEmpty()) {
    const [i, j] = deque.popFront();
    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      // Ensure the neighbor is within grid bounds.
      if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
        // Calculate the cost to move into the neighbor.
        const newCost = dist[i][j] + grid[ni][nj];
        if (newCost < dist[ni][nj]) {
          dist[ni][nj] = newCost;
          // If there's no obstacle (cost 0), add to the front.
          if (grid[ni][nj] === 0) {
            deque.pushFront([ni, nj]);
          } else {
            // For an obstacle (cost 1), add to the back.
            deque.pushBack([ni, nj]);
          }
        }
      }
    }
  }
  
  // Return the minimum obstacles removed to reach bottom-right.
  return dist[m - 1][n - 1];
}//
//
//https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/
