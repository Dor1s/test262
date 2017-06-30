var callCount = 0;
class C {
  *method() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], 'TC39');
    callCount = callCount + 1;
  }
}
C.prototype.method(42, 'TC39',).next();
var ref = C.prototype.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');