var callCount = 0;
var f;
f = ({ arrow = () => {} } = {}) => {
  assert.sameValue(arrow.name, 'arrow');
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');