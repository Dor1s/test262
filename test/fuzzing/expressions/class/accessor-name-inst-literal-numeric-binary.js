var stringSet;
var C = class {
  get 0b10() { return 'get string'; }
  set 0b10(param) { stringSet = param; }
};
assert.sameValue(C.prototype['2'], 'get string');
C.prototype['2'] = 'set string';
assert.sameValue(stringSet, 'set string');