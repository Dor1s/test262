var x = 0;
var callCount = 0;
var ref;
ref = function*(x, y = x, z = y) {
  assert.sameValue(x, 3, 'first argument value');
  assert.sameValue(y, 3, 'second argument value');
  assert.sameValue(z, 3, 'third argument value');
  callCount = callCount + 1;
};
ref(3).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');