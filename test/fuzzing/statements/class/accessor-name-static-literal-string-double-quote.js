var stringSet;
class C {
  static get "doubleQuote"() { return 'get string'; }
  static set "doubleQuote"(param) { stringSet = param; }
}
assert.sameValue(C["doubleQuote"], 'get string');
C["doubleQuote"] = 'set string';
assert.sameValue(stringSet, 'set string');