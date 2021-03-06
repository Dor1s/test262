var callCount = 0;
var ref;
ref = function(a, b = 39,) {
  assert.sameValue(a, 42);
  assert.sameValue(b, 39);
  callCount = callCount + 1;
};
ref(42, undefined, 1);
assert.sameValue(callCount, 1, 'function invoked exactly once');
assert.sameValue(ref.length, 1, 'length is properly set');