var stringSet;
var obj = {
  get ["doubleQuote"]() { return 'get string'; },
  set ["doubleQuote"](param) { stringSet = param; }
};
assert.sameValue(obj["doubleQuote"], 'get string');
obj["doubleQuote"] = 'set string';
assert.sameValue(stringSet, 'set string');