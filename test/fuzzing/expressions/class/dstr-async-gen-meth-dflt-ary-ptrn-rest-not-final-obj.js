throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var C = class {
  async *method([...{ x }, y] = [1, 2, 3]) {
    
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);