var callCount = 0;
class C {
  static async *method([x, y, z] = [1, 2, 3]) {
    assert.sameValue(x, 1);
    assert.sameValue(y, 2);
    assert.sameValue(z, 3);
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);