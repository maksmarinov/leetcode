const maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let dirs = [-1, 0, 1];
  const vis = Array.from({ length: rows }, () => Array(cols).fill(false));
  let temp = 0;
  function recursFunc(r, c, visited, moveCount) {
    temp = Math.max(temp, moveCount);
    if (temp === cols - 1) {
      return temp;
    }
    for (i of dirs) {
      let nav = r + i;
      let adjCol = c + 1;
      if (
        nav >= 0 &&
        nav < rows &&
        grid[r][c] < grid[nav][adjCol] &&
        visited[nav][adjCol] === false
      ) {
        visited[nav][adjCol] = true;
        temp = adjCol;
        recursFunc(nav, adjCol, visited, moveCount);
      }
      console.log(temp);
    }
  }
  for (let row = 0; row < rows; row++) {
    recursFunc(row, 0, vis, temp);
  }

  console.log(vis);
  return temp;
};
//https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/description/
//____Sol2__________________________________________________________________________

// var maxMoves = function (grid) {
//   const ROW = grid.length;
//   const COL = grid[0].length;
//   const vis = Array.from({ length: ROW }, () => Array(COL).fill(0));
//   for (let col = COL - 2; col >= 0; col--) {
//     for (let row = 0; row < ROW; row++) {
//       if (row > 0 && grid[row][col] < grid[row - 1][col + 1]) {
//         vis[row][col] = Math.max(vis[row][col], vis[row - 1][col + 1] + 1);
//       }
//       if (row < ROW - 1 && grid[row][col] < grid[row + 1][col + 1]) {
//         vis[row][col] = Math.max(vis[row][col], vis[row + 1][col + 1] + 1);
//       }
//       if (grid[row][col] < grid[row][col + 1]) {
//         vis[row][col] = Math.max(vis[row][col], vis[row][col + 1] + 1);
//       }
//     }
//   }
//   let maxMoveC = 0;
//   for (i = 0; i < vis.length; i++) {
//     maxMoveC = Math.max(maxMoveC, vis[i][0]);
//   }
//   return maxMoveC;
// };

//_____Sol3________________________________________________________________________

// var maxMoves = function (grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const vis = Array.from({ length: rows }, () => Array(cols).fill(false));
//   let q = [];
//   for (let i = 0; i < rows; i++) {
//     q.push([i, 0, 0]);
//   }
//   let temp = 0;
//   while (q.length != 0) {
//     let val = q.shift();
//     let currRow = val[0];
//     let currCol = val[1];
//     let count = val[2];
//     if (count > currCol) {
//       count = currCol;
//     }
//     temp = Math.max(temp, count);
//     if (temp === cols - 1) {
//       return temp;
//     }
//     if (
//       currRow > 0 &&
//       grid[currRow][currCol] < grid[currRow - 1][currCol + 1] &&
//       vis[currRow - 1][currCol + 1] === false
//     ) {
//       vis[currRow - 1][currCol + 1] = true;
//       count = count + 1;
//       q.push([currRow - 1, currCol + 1, count]);
//     }
//     if (
//       currRow < rows - 1 &&
//       grid[currRow][currCol] < grid[currRow + 1][currCol + 1] &&
//       vis[currRow + 1][currCol + 1] === false
//     ) {
//       vis[currRow + 1][currCol + 1] = true;
//       count = count + 1;
//       q.push([currRow + 1, currCol + 1, count]);
//     }
//     if (
//       grid[currRow][currCol] < grid[currRow][currCol + 1] &&
//       vis[currRow][currCol + 1] === false
//     ) {
//       vis[currRow][currCol + 1] = true;
//       count = count + 1;
//       q.push([currRow, currCol + 1, count]);
//     }
//   }
//   return temp;
// };
let test1 = [
  [187, 167, 209, 251, 152, 236, 263, 128, 135],
  [267, 249, 251, 285, 73, 204, 70, 207, 74],
  [189, 159, 235, 66, 84, 89, 153, 111, 189],
  [120, 81, 210, 7, 2, 231, 92, 128, 218],
  [193, 131, 244, 293, 284, 175, 226, 205, 245],
];
maxMoves(test1);
