/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const arr = s.split("");
  let vowelsinStr = [];
  let vowelsIndex = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (vowels.has(arr[i])) {
      vowelsinStr.push(arr[i]);
      vowelsIndex.push(i);
    }
  }

  const reversed = vowelsinStr.reverse();
  const reversedLength = reversed.length;
  for (let i = 0; i < reversedLength; i++) {
    arr[vowelsIndex[i]] = reversed[i];
  }
  return arr.join("");
};
