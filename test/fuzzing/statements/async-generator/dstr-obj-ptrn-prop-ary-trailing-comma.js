var callCount = 0;
async function* f({ x: [y], }) {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f({ x: [45] }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);