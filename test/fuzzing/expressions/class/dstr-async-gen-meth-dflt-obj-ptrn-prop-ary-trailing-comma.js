var callCount = 0;
var C = class {
  async *method({ x: [y], } = { x: [45] }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);