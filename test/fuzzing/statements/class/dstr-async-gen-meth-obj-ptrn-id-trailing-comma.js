var callCount = 0;
class C {
  async *method({ x, }) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
new C().method({ x: 23 }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);