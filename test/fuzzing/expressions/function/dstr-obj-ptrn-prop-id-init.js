var callCount = 0;
var f;
f = function({ x: y = 33 }) {
  assert.sameValue(y, 33);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f({ });
assert.sameValue(callCount, 1, 'function invoked exactly once');