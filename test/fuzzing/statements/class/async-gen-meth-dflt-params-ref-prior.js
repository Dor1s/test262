var x = 0;
var callCount = 0;
class C {
  async *method(x, y = x, z = y) {
    assert.sameValue(x, 3, 'first argument value');
    assert.sameValue(y, 3, 'second argument value');
    assert.sameValue(z, 3, 'third argument value');
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(3).next().then(() => {
    assert.sameValue(callCount, 1, 'method invoked exactly once');
}).then($DONE, $DONE);