var _;
var stringSet;
var C = class {
  static get [_ = 'str' + 'ing']() { return 'get string'; }
  static set [_ = 'str' + 'ing'](param) { stringSet = param; }
};
assert.sameValue(C['string'], 'get string');
C['string'] = 'set string';
assert.sameValue(stringSet, 'set string');