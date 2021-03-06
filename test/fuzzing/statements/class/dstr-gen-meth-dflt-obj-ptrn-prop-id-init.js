var callCount = 0;
class C {
  *method({ x: y = 33 } = { }) {
    assert.sameValue(y, 33);
    assert.throws(ReferenceError, function() {
      x;
    });
    callCount = callCount + 1;
  }
};
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');