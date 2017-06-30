var callCount = 0;
var C = class {
  static *method() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], null);
    callCount = callCount + 1;
  }
};
C.method(42, null,).next();
var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');