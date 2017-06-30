var callCount = 0;
function* g() {
  callCount += 1;
};
var callCount = 0;
var C = class {
  static method([[,] = g()] = [[]]) {
    assert.sameValue(callCount, 0);
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');