var stringSet;
var C = class {
  get 0() { return 'get string'; }
  set 0(param) { stringSet = param; }
};
assert.sameValue(C.prototype['0'], 'get string');
C.prototype['0'] = 'set string';
assert.sameValue(stringSet, 'set string');