var callCount = 0;
var C = class {
  static async *method([x = 23]) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
C.method([]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);