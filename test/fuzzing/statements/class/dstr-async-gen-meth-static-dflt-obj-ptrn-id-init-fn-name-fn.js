var callCount = 0;
class C {
  static async *method({ fn = function () {}, xFn = function x() {} } = {}) {
    assert.sameValue(fn.name, 'fn');
    assert.notSameValue(xFn.name, 'xFn');
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);