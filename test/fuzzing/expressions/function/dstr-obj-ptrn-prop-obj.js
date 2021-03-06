var callCount = 0;
var f;
f = function({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f({ w: { x: undefined, z: 7 } });
assert.sameValue(callCount, 1, 'function invoked exactly once');