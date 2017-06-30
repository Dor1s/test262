var callCount = 0;
var obj = {
  async *method({ x: [y], } = { x: [45] }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);