function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const answer: boolean[] = [];
  const truthy: number[][] = [];
  const faulty: number[][] = [];
  for (let i = 0; i < queries.length; i++) {
    let first: number = queries[i][0];
    let last: number = queries[i][1];
    let check: boolean = true;
    if (checkTruthyRanges(first, last)) {
      answer.push(true);
    } else if (checkFaultyRanges(first, last)) {
      answer.push(false);
    } else {
      for (let j = first; j <= last; j++) {
        if (nums[j] % 2 == nums[j + 1] % 2 && j + 1 <= last) {
          check = false;
        }
      }
      if (check) {
        truthy.push([first, last]);
      } else if (!check) {
        faulty.push([first, last]);
      }
      answer.push(check);
    }
  }
  function checkFaultyRanges(first: number, last: number): boolean {
    for (let i = 0; i < faulty.length; i++) {
      if (faulty[i][0] >= first && faulty[i][1] <= last) {
        return true;
      }
    }
    return false;
  }
  function checkTruthyRanges(first: number, last: number): boolean {
    for (let i = 0; i < truthy.length; i++) {
      if (first >= truthy[i][0] && last <= truthy[i][1]) {
        return true;
      }
    }
    return false;
  }
  return answer;
}

//https://leetcode.com/problems/special-array-ii/?envType=daily-question&envId=2024-12-09
