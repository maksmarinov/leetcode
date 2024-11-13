var minChanges = function (s) {
  let beautiful = 0;
  if (s.length % 2 != 0) {
    return false;
  }
  for (i = 1; i < s.length; i += 2) {
    if (s[i] != s[i - 1]) {
      beautiful++;
    }
  }
  return beautiful;
};

//https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/
