var callCount = 0;
var obj = {
  *method(x = arguments[2], y = arguments[3], z) {
    assert.sameValue(x, 'third', 'first parameter');
    assert.sameValue(y, 'fourth', 'second parameter');
    assert.sameValue(z, 'third', 'third parameter');
    callCount = callCount + 1;
  }
};
obj.method(undefined, undefined, 'third', 'fourth').next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');