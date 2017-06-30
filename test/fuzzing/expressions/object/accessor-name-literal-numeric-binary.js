var stringSet;
var obj = {
  get [0b10]() { return 'get string'; },
  set [0b10](param) { stringSet = param; }
};
assert.sameValue(obj['2'], 'get string');
obj['2'] = 'set string';
assert.sameValue(stringSet, 'set string');