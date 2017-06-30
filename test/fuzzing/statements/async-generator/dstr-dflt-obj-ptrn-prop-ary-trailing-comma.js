var callCount = 0;
async function* f({ x: [y], } = { x: [45] }) {
  assert.sameValue(y,45);
  callCount = callCount + 1;
};
f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);