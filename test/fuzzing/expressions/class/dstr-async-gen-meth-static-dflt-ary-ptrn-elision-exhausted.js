var iter = function*() {}();
iter.next();
var callCount = 0;
var C = class {
  static async *method([,] = iter) {
    
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);