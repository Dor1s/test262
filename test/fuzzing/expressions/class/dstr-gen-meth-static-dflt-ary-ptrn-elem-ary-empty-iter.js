var initCount = 0;
var callCount = 0;
var C = class {
  static *method([[] = function() { initCount += 1; }()] = [[23]]) {
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');