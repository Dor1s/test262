var callCount = 0;
var C = class {
  async *method([, , ...x] = [1, 2]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);