function maximumLength(s: string): number {
  let maxPossible: number = s.length - 2;
  function isSpecial(array: string): boolean {
    let set: string[] = [...new Set(array)];
    if (set.length == 1) {
      return true;
    }
    return false;
  }
  while (maxPossible > 0) {
    const queue: any[] = [];
    let start = 0;
    let end = maxPossible;
    while (end <= s.length) {
      let arr1 = s.slice(start, end).toString();
      if (isSpecial(arr1)) {
        if (queue.includes(arr1)) {
          let index: number = queue.indexOf(arr1) + 1;
          queue[index]++;
          if (queue[index] == 2) {
            return arr1.length;
          }
        } else {
          queue.push(arr1, 0);
        }
      }
      start++;
      end++;
    }
    maxPossible--;
  }
  return -1;
}

//https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/description/
