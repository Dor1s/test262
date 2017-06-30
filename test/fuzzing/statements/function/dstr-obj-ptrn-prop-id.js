var callCount = 0;
function f({ x: y }) {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  callCount = callCount + 1;
};
f({ x: 23 });
assert.sameValue(callCount, 1, 'function invoked exactly once');