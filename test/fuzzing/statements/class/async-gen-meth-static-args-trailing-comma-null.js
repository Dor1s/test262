var callCount = 0;
class C {
  static async *method() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], null);
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(42, null,).next().then(() => {
    assert.sameValue(callCount, 1, 'method invoked exactly once');
}).then($DONE, $DONE);