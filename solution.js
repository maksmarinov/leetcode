var canSortArray = function (nums) {
  let test = Array.from(nums, (i) => i.toString(2).replaceAll("0", ""));
  let res = true;
  for (i = 0; i < nums.length - 1; i++) {
    while (nums[i] > nums[i + 1]) {
      if (test[i] != test[i + 1]) {
        res = false;
        break;
      }
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
      i = 0;
    }
  }
  return res;
};

// https://leetcode.com/problems/find-if-array-can-be-sorted/description/
