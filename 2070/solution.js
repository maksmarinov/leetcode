let max = Number.MAX_VALUE;
var maximumBeauty = function (items, queries) {
  let res = [];
  let sorted = createPriceRanges(items);
  for (i = 0; i < queries.length; i++) {
    for (k = sorted.length - 1; k > -1; k--) {
      if (queries[i] >= sorted[k][0]) {
        res.push(sorted[k][1]);
        break;
      }
    }
  }
  return res;
};
let createPriceRanges = (items) => {
  let sortedByPrice = items.sort(function (a, b) {
    return a[0] - b[0];
  });
  let array = [[0, 0, max]];
  for (j = 0; j < items.length; j++) {
    let x = array.length - 1;
    if (items[j][1] > array[x][1] && items[j][0] === array[x][0]) {
      array[x][1] = items[j][1];
      array[x][2] = Math.min(array[x][2], items[j][2]);
    } else if (items[j][1] > array[x][1]) {
      array[x][2] = items[j][0];
      array.push([items[j][0], items[j][1], max]);
    }
  }
  return array;
};

//https://leetcode.com/problems/most-beautiful-item-for-each-query/description/
