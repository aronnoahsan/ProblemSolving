/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/
var mostWordsFound = function (sentences) {
  const length = sentences.length;
  let highestWords = 0;
  for (let i = 0; i < length; i++) {
    const words = sentences[i].split(" ").length;
    if (highestWords < words) {
      highestWords = words;
    }
  }
  return highestWords;
};
