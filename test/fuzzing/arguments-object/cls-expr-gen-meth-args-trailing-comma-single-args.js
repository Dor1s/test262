var callCount = 0;
var C = class {
  *method() {
    assert.sameValue(arguments.length, 1);
    assert.sameValue(arguments[0], 42);
    callCount = callCount + 1;
  }
};
C.prototype.method(42,).next();
var ref = C.prototype.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');