var iter = function*() {}();
iter.next();
var callCount = 0;
class C {
  async *method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);