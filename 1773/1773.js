/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.
*/

var countMatches = function (items, ruleKey, ruleValue) {
  const length = items.length;
  let matchedRules = 0;
  for (let i = 0; i < length; i++) {
    const item = items[i];
    if (ruleKey == "type") {
      if (ruleValue == item[0]) {
        matchedRules++;
      }
    } else if (ruleKey == "color") {
      if (ruleValue == item[1]) {
        matchedRules++;
      }
    } else {
      if (ruleValue == item[2]) {
        matchedRules++;
      }
    }
  }
  return matchedRules;
};
