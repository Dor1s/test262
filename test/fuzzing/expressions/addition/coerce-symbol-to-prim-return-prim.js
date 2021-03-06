var y = {};
var retVal;
y[Symbol.toPrimitive] = function() {
  return retVal;
};
retVal = 86;
assert.sameValue(1 + y, 87);
assert.sameValue(y + 2, 88);
assert.sameValue('s' + y, 's86');
assert.sameValue(y + 's', '86s');
retVal = 'str';
assert.sameValue(0 + y, '0str');
assert.sameValue(y + 0, 'str0');
assert.sameValue('s' + y, 'sstr');
assert.sameValue(y + 's', 'strs');
retVal = Symbol.toPrimitive;
assert.throws(TypeError, function() {
  0 + y;
}, 'ToNumber(Symbol): right-hand side');
assert.throws(TypeError, function() {
  y + 0;
}, 'ToNumber(Symbol): left-hand side');
assert.throws(TypeError, function() {
  '' + y;
}, 'ToString(Symbol): right-hand side');
assert.throws(TypeError, function() {
  y + '';
}, 'ToString(Symbol): left-hand size');