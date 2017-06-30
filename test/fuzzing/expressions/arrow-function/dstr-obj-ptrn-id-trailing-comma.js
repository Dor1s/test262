var callCount = 0;
var f;
f = ({ x, }) => {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f({ x: 23 });
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');