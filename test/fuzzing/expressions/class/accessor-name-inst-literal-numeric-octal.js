var stringSet;
var C = class {
  get 0o10() { return 'get string'; }
  set 0o10(param) { stringSet = param; }
};
assert.sameValue(C.prototype['8'], 'get string');
C.prototype['8'] = 'set string';
assert.sameValue(stringSet, 'set string');