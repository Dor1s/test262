var callCount = 0;
function* f({ w: [x, y, z] = [4, 5, 6] }) {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);
  assert.throws(ReferenceError, function() {
    w;
  });
  callCount = callCount + 1;
};
f({ w: [7, undefined, ] }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');