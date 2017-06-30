throw "Test262: This statement should not be evaluated.";
var callCount = 0;
class C {
  static async *method([...[ x ] = []]) {
    
    callCount = callCount + 1;
  }
};
C.method([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);