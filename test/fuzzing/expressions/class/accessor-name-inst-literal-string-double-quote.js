var stringSet;
var C = class {
  get "doubleQuote"() { return 'get string'; }
  set "doubleQuote"(param) { stringSet = param; }
};
assert.sameValue(C.prototype["doubleQuote"], 'get string');
C.prototype["doubleQuote"] = 'set string';
assert.sameValue(stringSet, 'set string');