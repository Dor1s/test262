var callCount = 0;
function f({ w: [x, y, z] = [4, 5, 6] } = { w: [7, undefined, ] }) {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');