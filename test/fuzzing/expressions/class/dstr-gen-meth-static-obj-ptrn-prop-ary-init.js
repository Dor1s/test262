var callCount = 0;
var C = class {
  static *method({ w: [x, y, z] = [4, 5, 6] }) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    assert.throws(ReferenceError, function() {
      w;
    });
    callCount = callCount + 1;
  }
};
C.method({}).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');