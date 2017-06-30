var stringSet;
var obj = {
  get [0]() { return 'get string'; },
  set [0](param) { stringSet = param; }
};
assert.sameValue(obj['0'], 'get string');
obj['0'] = 'set string';
assert.sameValue(stringSet, 'set string');