var callCount = 0;
function* f({ arrow = () => {} } = {}) {
  assert.sameValue(arrow.name, 'arrow');
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');