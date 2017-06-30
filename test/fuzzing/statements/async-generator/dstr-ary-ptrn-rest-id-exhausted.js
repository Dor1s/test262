var callCount = 0;
async function* f([, , ...x]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  callCount = callCount + 1;
};
f([1, 2]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);