var callCount = 0;
var obj = {
  *method() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], 'TC39');
    callCount = callCount + 1;
  }
};
obj.method(42, 'TC39',).next();
var ref = obj.method;
assert.sameValue(callCount, 1, 'generator method invoked exactly once');