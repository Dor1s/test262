var callCount = 0;
var C = class {
  static *method([arrow = () => {}] = []) {
    assert.sameValue(arrow.name, 'arrow');
    callCount = callCount + 1;
  }
};
C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');