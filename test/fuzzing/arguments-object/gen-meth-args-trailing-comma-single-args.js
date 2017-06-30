var callCount = 0;
var obj = {
  *method() {
    assert.sameValue(arguments.length, 1);
    assert.sameValue(arguments[0], 42);
    callCount = callCount + 1;
  }
};
obj.method(42,).next();
var ref = obj.method;
assert.sameValue(callCount, 1, 'generator method invoked exactly once');