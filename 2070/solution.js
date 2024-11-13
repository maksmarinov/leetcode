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

//items =
// [[193,732],[781,962],[864,954],[749,627],[136,746],[478,548],[640,908],[210,799],[567,715],[914,388],[487,853],[533,554],[247,919],[958,150],[193,523],[176,656],[395,469],[763,821],[542,946],[701,676]]
// queries =
// [885,1445,1580,1309,205,1788,1214,1404,572,1170,989,265,153,151,1479,1180,875,276,1584]
