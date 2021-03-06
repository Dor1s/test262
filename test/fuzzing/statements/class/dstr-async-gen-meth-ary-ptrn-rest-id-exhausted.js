var callCount = 0;
class C {
  async *method([, , ...x]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    callCount = callCount + 1;
  }
};
new C().method([1, 2]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);