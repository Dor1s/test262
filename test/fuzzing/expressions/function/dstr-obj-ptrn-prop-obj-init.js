var callCount = 0;
var f;
f = function({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f({ w: undefined });
assert.sameValue(callCount, 1, 'function invoked exactly once');