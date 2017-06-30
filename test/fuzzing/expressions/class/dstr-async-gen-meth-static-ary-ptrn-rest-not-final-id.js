throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var C = class {
  static async *method([...x, y]) {
    
    callCount = callCount + 1;
  }
};
C.method([1, 2, 3]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);