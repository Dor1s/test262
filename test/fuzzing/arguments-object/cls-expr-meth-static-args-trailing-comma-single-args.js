var callCount = 0;
var C = class {
  static method() {
    assert.sameValue(arguments.length, 1);
    assert.sameValue(arguments[0], 42);
    callCount = callCount + 1;
  }
};
C.method(42,);
var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');