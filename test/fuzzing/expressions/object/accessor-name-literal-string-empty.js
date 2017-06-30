var stringSet;
var obj = {
  get ['']() { return 'get string'; },
  set [''](param) { stringSet = param; }
};
assert.sameValue(obj[''], 'get string');
obj[''] = 'set string';
assert.sameValue(stringSet, 'set string');