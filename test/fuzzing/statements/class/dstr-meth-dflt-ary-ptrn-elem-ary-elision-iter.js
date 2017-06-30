var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
class C {
  method([[,] = g()] = [[]]) {
    assert.sameValue(callCount, 0);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');