var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
var obj = {
  method([[,] = g()] = [[]]) {
    assert.sameValue(callCount, 0);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');