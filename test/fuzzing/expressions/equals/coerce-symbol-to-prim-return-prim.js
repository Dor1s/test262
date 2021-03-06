var y = {};
var retVal;
y[Symbol.toPrimitive] = function() {
  return retVal;
};
retVal = 86;
assert.sameValue(0 == y, false, 'number primitive (not equal)');
assert.sameValue(86 == y, true, 'number primitive (equal)');
retVal = 'str';
assert.sameValue(0 == y, false, 'string primitive (not equal)');
assert.sameValue('str' == y, true, 'sting primitive (equal)');
retVal = Symbol.toPrimitive;
assert.sameValue(0 == y, false, 'symbol (not equal)');
assert.sameValue(Symbol.toPrimitive == y, true, 'symbol (equal)');