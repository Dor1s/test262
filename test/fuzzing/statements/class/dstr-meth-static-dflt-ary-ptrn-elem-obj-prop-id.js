var callCount = 0;
class C {
  static method([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] = [{ u: 777, w: 888, y: 999 }]) {
    assert.sameValue(v, 777);
    assert.sameValue(x, 888);
    assert.sameValue(z, 999);
    assert.throws(ReferenceError, function() {
      u;
    });
    assert.throws(ReferenceError, function() {
      w;
    });
    assert.throws(ReferenceError, function() {
      y;
    });
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');