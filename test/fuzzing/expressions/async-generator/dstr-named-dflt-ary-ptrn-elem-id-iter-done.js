var callCount = 0;
var f;
f = async function* h([_, x] = []) {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);