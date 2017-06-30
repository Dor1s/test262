var initCount = 0;
var callCount = 0;
class C {
  method([[] = function() { initCount += 1; }()]) {
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
new C().method([[23]]);
assert.sameValue(callCount, 1, 'method invoked exactly once');