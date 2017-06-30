var callCount = 0;
var C = class {
  static async *method({ x: [y], }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
C.method({ x: [45] }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);