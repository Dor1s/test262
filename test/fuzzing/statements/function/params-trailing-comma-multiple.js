var callCount = 0;
function ref(a, b,) {
  assert.sameValue(a, 42);
  assert.sameValue(b, 39);
  callCount = callCount + 1;
}
ref(42, 39, 1);
assert.sameValue(callCount, 1, 'function invoked exactly once');
assert.sameValue(ref.length, 2, 'length is properly set');