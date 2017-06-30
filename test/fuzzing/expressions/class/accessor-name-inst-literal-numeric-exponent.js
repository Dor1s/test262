var stringSet;
var C = class {
  get 1E+9() { return 'get string'; }
  set 1E+9(param) { stringSet = param; }
};
assert.sameValue(C.prototype['1000000000'], 'get string');
C.prototype['1000000000'] = 'set string';
assert.sameValue(stringSet, 'set string');