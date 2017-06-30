var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
class C {
  static async *method({ w = counter(), x = counter(), y = counter(), z = counter() }) {
    assert.sameValue(w, null);
    assert.sameValue(x, 0);
    assert.sameValue(y, false);
    assert.sameValue(z, '');
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
C.method({ w: null, x: 0, y: false, z: '' }).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);