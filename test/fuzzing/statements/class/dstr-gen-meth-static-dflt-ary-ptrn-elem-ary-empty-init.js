var initCount = 0;
var iterCount = 0;
var iter = function*() { iterCount += 1; }();
var callCount = 0;
class C {
  static *method([[] = function() { initCount += 1; return iter; }()] = []) {
    assert.sameValue(initCount, 1);
    assert.sameValue(iterCount, 0);
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');