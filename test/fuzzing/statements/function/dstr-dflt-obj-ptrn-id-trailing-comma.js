var callCount = 0;
function f({ x, } = { x: 23 }) {
  assert.sameValue(x, 23);
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');