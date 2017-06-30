var callCount = 0;
var f;
f = ([x]) => {
  assert.sameValue(x, undefined);
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');