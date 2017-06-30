var stringSet;
var obj = {
  get [.1]() { return 'get string'; },
  set [.1](param) { stringSet = param; }
};
assert.sameValue(obj['0.1'], 'get string');
obj['0.1'] = 'set string';
assert.sameValue(stringSet, 'set string');