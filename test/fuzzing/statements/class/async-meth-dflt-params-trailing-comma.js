var callCount = 0;
class C {
  async method(a, b = 39,) {
    assert.sameValue(a, 42);
    assert.sameValue(b, 39);
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, undefined, 1).then(() => {
    assert.sameValue(callCount, 1, 'method invoked exactly once');
}).then($DONE, $DONE);
assert.sameValue(ref.length, 1, 'length is properly set');