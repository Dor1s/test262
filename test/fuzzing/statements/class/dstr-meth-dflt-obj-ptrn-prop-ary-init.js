var callCount = 0;
class C {
  method({ w: [x, y, z] = [4, 5, 6] } = {}) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    assert.throws(ReferenceError, function() {
      w;
    });
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');