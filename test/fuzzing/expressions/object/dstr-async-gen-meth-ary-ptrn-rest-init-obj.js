throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var obj = {
  async *method([...{ x } = []]) {
    
    callCount = callCount + 1;
  }
};
obj.method([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);