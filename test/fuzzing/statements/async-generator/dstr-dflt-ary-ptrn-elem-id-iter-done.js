var callCount = 0;
async function* f([_, x] = []) {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);