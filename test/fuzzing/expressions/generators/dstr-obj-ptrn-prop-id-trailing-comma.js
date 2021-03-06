var callCount = 0;
var f;
f = function*({ x: y, }) {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f({ x: 23 }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');