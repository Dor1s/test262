var stringSet;
class C {
  static get 'character\tescape'() { return 'get string'; }
  static set 'character\tescape'(param) { stringSet = param; }
}
assert.sameValue(C['character	escape'], 'get string');
C['character	escape'] = 'set string';
assert.sameValue(stringSet, 'set string');