var stringSet;
var C = class {
  get 'character\tescape'() { return 'get string'; }
  set 'character\tescape'(param) { stringSet = param; }
};
assert.sameValue(C.prototype['character	escape'], 'get string');
C.prototype['character	escape'] = 'set string';
assert.sameValue(stringSet, 'set string');