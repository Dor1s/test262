var x = 0;
var callCount = 0;
var ref;
ref = (x, y = x, z = y) => {
  assert.sameValue(x, 3, 'first argument value');
  assert.sameValue(y, 3, 'second argument value');
  assert.sameValue(z, 3, 'third argument value');
  callCount = callCount + 1;
};
ref(3);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');