var stringSet;
var obj = {
  get [0.0000001]() { return 'get string'; },
  set [0.0000001](param) { stringSet = param; }
};
assert.sameValue(obj['1e-7'], 'get string');
obj['1e-7'] = 'set string';
assert.sameValue(stringSet, 'set string');