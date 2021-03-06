var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
var callCount = 0;
class C {
  method([[,] = g()] = []) {
    assert.sameValue(first, 1);
    assert.sameValue(second, 0);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');