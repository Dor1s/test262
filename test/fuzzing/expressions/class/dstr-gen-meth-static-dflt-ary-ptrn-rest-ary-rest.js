var values = [1, 2, 3];
var callCount = 0;
var C = class {
  static *method([...[...x]] = values) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 3);
    assert.sameValue(x[0], 1);
    assert.sameValue(x[1], 2);
    assert.sameValue(x[2], 3);
    assert.notSameValue(x, values);
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');