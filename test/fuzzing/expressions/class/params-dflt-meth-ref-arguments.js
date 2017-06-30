var callCount = 0;
var C = class {
  method(x = arguments[2], y = arguments[3], z) {
    assert.sameValue(x, 'third', 'first parameter');
    assert.sameValue(y, 'fourth', 'second parameter');
    assert.sameValue(z, 'third', 'third parameter');
    callCount = callCount + 1;
  }
};
C.prototype.method(undefined, undefined, 'third', 'fourth');
assert.sameValue(callCount, 1, 'method invoked exactly once');