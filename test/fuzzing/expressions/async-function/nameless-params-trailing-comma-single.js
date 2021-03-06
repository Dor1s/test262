var callCount = 0;
var ref;
ref = async function(a,) {
  assert.sameValue(a, 42);
  callCount = callCount + 1;
};
ref(42, 39).then(() => {
    assert.sameValue(callCount, 1, 'function invoked exactly once');
}).then($DONE, $DONE);
assert.sameValue(ref.length, 1, 'length is properly set');