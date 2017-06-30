var stringSet;
class C {
  static get 'singleQuote'() { return 'get string'; }
  static set 'singleQuote'(param) { stringSet = param; }
}
assert.sameValue(C['singleQuote'], 'get string');
C['singleQuote'] = 'set string';
assert.sameValue(stringSet, 'set string');