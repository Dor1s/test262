var callCount = 0;
var obj = {
  method([{ x, y, z } = { x: 44, y: 55, z: 66 }] = [{ x: 11, y: 22, z: 33 }]) {
    assert.sameValue(x, 11);
    assert.sameValue(y, 22);
    assert.sameValue(z, 33);
    callCount = callCount + 1;
  }
};
obj.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');