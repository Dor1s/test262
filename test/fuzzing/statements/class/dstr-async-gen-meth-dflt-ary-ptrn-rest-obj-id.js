var callCount = 0;
class C {
  async *method([...{ length }] = [1, 2, 3]) {
    assert.sameValue(length, 3);
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);