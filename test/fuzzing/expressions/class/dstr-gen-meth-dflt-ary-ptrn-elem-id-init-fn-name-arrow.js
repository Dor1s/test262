var callCount = 0;
var C = class {
  *method([arrow = () => {}] = []) {
    assert.sameValue(arrow.name, 'arrow');
    callCount = callCount + 1;
  }
};
new C().method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');