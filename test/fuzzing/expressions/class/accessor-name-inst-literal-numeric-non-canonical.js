var stringSet;
var C = class {
  get 0.0000001() { return 'get string'; }
  set 0.0000001(param) { stringSet = param; }
};
assert.sameValue(C.prototype['1e-7'], 'get string');
C.prototype['1e-7'] = 'set string';
assert.sameValue(stringSet, 'set string');