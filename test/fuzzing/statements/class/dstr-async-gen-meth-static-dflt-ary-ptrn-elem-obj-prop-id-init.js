var callCount = 0;
class C {
  static async *method([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] = []) {
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
C.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);