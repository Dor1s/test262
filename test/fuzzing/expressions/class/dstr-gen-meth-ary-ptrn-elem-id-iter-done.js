var callCount = 0;
var C = class {
  *method([_, x]) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};
new C().method([]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');