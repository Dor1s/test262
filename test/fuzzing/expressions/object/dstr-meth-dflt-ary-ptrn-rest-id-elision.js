var values = [1, 2, 3, 4, 5];
var callCount = 0;
var obj = {
  method([ , , ...x] = values) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 3);
    assert.sameValue(x[0], 3);
    assert.sameValue(x[1], 4);
    assert.sameValue(x[2], 5);
    assert.notSameValue(x, values);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');