var callCount = 0;
var C = class {
  static async *method({ x: y = 33 } = { }) {
    assert.sameValue(y, 33);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);