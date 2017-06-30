var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
var callCount = 0;
var obj = {
  method([...[,]] = g()) {
    assert.sameValue(first, 1);
    assert.sameValue(second, 1);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');