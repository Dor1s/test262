var _;
var stringSet;
class C {
  get [_ = 'str' + 'ing']() { return 'get string'; }
  set [_ = 'str' + 'ing'](param) { stringSet = param; }
}
assert.sameValue(C.prototype['string'], 'get string');
C.prototype['string'] = 'set string';
assert.sameValue(stringSet, 'set string');