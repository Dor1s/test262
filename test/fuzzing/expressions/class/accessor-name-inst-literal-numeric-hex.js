var stringSet;
var C = class {
  get 0x10() { return 'get string'; }
  set 0x10(param) { stringSet = param; }
};
assert.sameValue(C.prototype['16'], 'get string');
C.prototype['16'] = 'set string';
assert.sameValue(stringSet, 'set string');