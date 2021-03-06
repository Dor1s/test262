var callCount = 0;
var C = class {
  async *method([_, x] = []) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);