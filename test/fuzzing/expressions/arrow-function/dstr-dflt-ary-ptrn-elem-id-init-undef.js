var callCount = 0;
var f;
f = ([x = 23] = [undefined]) => {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');