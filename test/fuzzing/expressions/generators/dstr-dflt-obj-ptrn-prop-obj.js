var callCount = 0;
var f;
f = function*({ w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: { x: undefined, z: 7 } }) {
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');