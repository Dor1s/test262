var callCount = 0;
class C {
  async *method([...{ length }]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
new C().method([1, 2, 3]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);