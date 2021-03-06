var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
var callCount = 0;
class C {
  static *method([,]) {
    assert.sameValue(first, 1);
    assert.sameValue(second, 0);
    callCount = callCount + 1;
  }
};
C.method(g()).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');