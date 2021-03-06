var y = {};
var retVal;
y[Symbol.toPrimitive] = function() {
  return retVal;
};
retVal = {};
assert.throws(TypeError, function() {
  0 + y;
}, 'ordinary object value, right-hand side');
assert.throws(TypeError, function() {
  y + 0;
}, 'ordinary object value, left-hand side');
retVal = (function() { return arguments; }());
assert.throws(TypeError, function() {
  0 + y;
}, 'arguments exotic object value, right-hand side');
assert.throws(TypeError, function() {
  y + 0;
}, 'arguments exotic object value, left-hand side');