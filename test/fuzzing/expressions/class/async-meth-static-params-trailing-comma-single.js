var callCount = 0;
var C = class {
  static async method(a,) {
    assert.sameValue(a, 42);
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(42, 39).then(() => {
  assert.sameValue(callCount, 1, 'method invoked exactly once');
}).then($DONE, $DONE);
assert.sameValue(ref.length, 1, 'length is properly set');