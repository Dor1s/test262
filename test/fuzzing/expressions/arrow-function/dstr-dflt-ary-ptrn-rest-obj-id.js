var callCount = 0;
var f;
f = ([...{ length }] = [1, 2, 3]) => {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');