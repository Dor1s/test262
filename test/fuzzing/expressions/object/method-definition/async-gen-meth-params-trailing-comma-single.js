var callCount = 0;
var obj = {
  async *method(a,) {
    assert.sameValue(a, 42);
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(42, 39).next().then(() => {
    assert.sameValue(callCount, 1, 'generator method invoked exactly once');
}).then($DONE, $DONE);
assert.sameValue(ref.length, 1, 'length is properly set');