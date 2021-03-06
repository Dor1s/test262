var callCount = 0;
var f;
f = function*([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }]) {
  assert.sameValue(v, 777);
  assert.sameValue(x, 888);
  assert.sameValue(z, 999);
  assert.throws(ReferenceError, function() {
    u;
  });
  assert.throws(ReferenceError, function() {
    w;
  });
  assert.throws(ReferenceError, function() {
    y;
  });
  callCount = callCount + 1;
};
f([{ u: 777, w: 888, y: 999 }]).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');