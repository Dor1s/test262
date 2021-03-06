var callCount = 0;
async function* f([...{ length }]) {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);