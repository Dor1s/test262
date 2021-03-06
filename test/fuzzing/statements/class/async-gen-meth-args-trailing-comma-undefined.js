var callCount = 0;
class C {
  async *method() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], undefined);
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, undefined,).next().then(() => {
    assert.sameValue(callCount, 1, 'method invoked exactly once');
}).then($DONE, $DONE);