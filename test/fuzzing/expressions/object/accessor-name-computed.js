var _;
var stringSet;
var obj = {
  get [[_ = 'str' + 'ing']]() { return 'get string'; },
  set [[_ = 'str' + 'ing']](param) { stringSet = param; }
};
assert.sameValue(obj['string'], 'get string');
obj['string'] = 'set string';
assert.sameValue(stringSet, 'set string');