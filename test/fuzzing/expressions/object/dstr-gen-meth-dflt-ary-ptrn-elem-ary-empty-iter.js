var initCount = 0;
var callCount = 0;
var obj = {
  *method([[] = function() { initCount += 1; }()] = [[23]]) {
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');