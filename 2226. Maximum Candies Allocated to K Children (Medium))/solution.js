//https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/


var maximumCandies = function (candies, k) {
    let n = candies.length;
    let res = 0;
    let max = Math.max(...candies);
    let min = 0;
    while (min <= max) {
        let allocated = 0;
        const mid = Math.ceil((max + min) / 2)
        for (let i = 0; i < n; i++) {
            const capacity = Math.floor(candies[i] / mid);
            allocated += capacity;
        }
        if (allocated >= k) {
            min = mid + 1;
            res = mid;
        } else {
            max = mid - 1;
        }
    }
    return res;
};