var callCount = 0;
function* ref(a,) {
  assert.sameValue(a, 42);
  callCount = callCount + 1;
}
ref(42, 39).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');