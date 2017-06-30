var stringSet;
class C {
  get 'singleQuote'() { return 'get string'; }
  set 'singleQuote'(param) { stringSet = param; }
}
assert.sameValue(C.prototype['singleQuote'], 'get string');
C.prototype['singleQuote'] = 'set string';
assert.sameValue(stringSet, 'set string');