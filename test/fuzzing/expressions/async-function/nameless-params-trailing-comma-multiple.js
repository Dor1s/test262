var callCount = 0;
var ref;
ref = async function(a, b,) {
  assert.sameValue(a, 42);
  assert.sameValue(b, 39);
  callCount = callCount + 1;
};
ref(42, 39, 1).then(() => {
    assert.sameValue(callCount, 1, 'function invoked exactly once');
}).then($DONE, $DONE);
assert.sameValue(ref.length, 2, 'length is properly set');