var stringSet;
var C = class {
  static get 1E+9() { return 'get string'; }
  static set 1E+9(param) { stringSet = param; }
};
assert.sameValue(C['1000000000'], 'get string');
C['1000000000'] = 'set string';
assert.sameValue(stringSet, 'set string');