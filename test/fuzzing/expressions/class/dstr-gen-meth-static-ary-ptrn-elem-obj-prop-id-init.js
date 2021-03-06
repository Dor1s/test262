var callCount = 0;
var C = class {
  static *method([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }]) {
    assert.sameValue(v, 444);
    assert.sameValue(x, 555);
    assert.sameValue(z, 666);
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
C.method([]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');