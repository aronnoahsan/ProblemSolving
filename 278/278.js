/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let startNum = 1;
    let endNum = n;
    let middle = Math.round(n / 2);

    while (startNum < endNum) {
      if (isBadVersion(startNum)) {
        return startNum;
      } else if (isBadVersion(middle)) {
        endNum = middle;
        startNum = startNum + 1;
        middle = Math.round((startNum + endNum) / 2);
      } else {
        startNum = middle + 1;
        middle = Math.round((startNum + endNum) / 2);
      }
    }

    return startNum;
  };

  // Solution 2 with 1 API Call
  //   while (startNum < endNum) {
  //     if (isBadVersion(middle)) {
  //       endNum = middle;
  //     } else {
  //       startNum = middle + 1;
  //     }
  //     middle = (startNum + endNum) / 2;
  //   }
  //   return Math.floor(startNum);
};
