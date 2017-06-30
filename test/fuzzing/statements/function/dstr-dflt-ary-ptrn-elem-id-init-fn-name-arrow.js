var callCount = 0;
function f([arrow = () => {}] = []) {
  assert.sameValue(arrow.name, 'arrow');
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'function invoked exactly once');