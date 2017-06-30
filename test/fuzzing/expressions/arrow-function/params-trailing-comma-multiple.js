var callCount = 0;
var ref;
ref = (a, b,) => {
  assert.sameValue(a, 42);
  assert.sameValue(b, 39);
  callCount = callCount + 1;
};
ref(42, 39, 1);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');
assert.sameValue(ref.length, 2, 'length is properly set');