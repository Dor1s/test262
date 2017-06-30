var callCount = 0;
var f;
f = ([...{ length }]) => {
  assert.sameValue(length, 3);
  callCount = callCount + 1;
};
f([1, 2, 3]);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');