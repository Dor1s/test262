var stringSet;
class C {
  get "doubleQuote"() { return 'get string'; }
  set "doubleQuote"(param) { stringSet = param; }
}
assert.sameValue(C.prototype["doubleQuote"], 'get string');
C.prototype["doubleQuote"] = 'set string';
assert.sameValue(stringSet, 'set string');