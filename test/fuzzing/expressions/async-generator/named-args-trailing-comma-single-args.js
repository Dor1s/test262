var callCount = 0;
var ref;
ref = async function* g() {
  assert.sameValue(arguments.length, 1);
  assert.sameValue(arguments[0], 42);
  callCount = callCount + 1;
};
ref(42,).next().then(() => {
    assert.sameValue(callCount, 1, 'generator function invoked exactly once');
}).then($DONE, $DONE);