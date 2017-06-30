var callCount = 0;
var f;
f = ([{ x, y, z } = { x: 44, y: 55, z: 66 }] = []) => {
  assert.sameValue(x, 44);
  assert.sameValue(y, 55);
  assert.sameValue(z, 66);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');