//https://leetcode.com/problems/divide-array-into-equal-pairs/description/

var divideArray = function (nums) {
    if (nums.length % 2 != 0) {
        return false;
    } else {
        numsCopy = [...nums]
        numsCopy.sort((a, b) => a - b)
        for (let i = 0; i < numsCopy.length; i += 2) {
            if (numsCopy[i] != numsCopy[i + 1]) {
                return false
            }
        }
        return true;
    }
};