var callCount = 0;
class C {
  static method({ arrow = () => {} } = {}) {
    assert.sameValue(arrow.name, 'arrow');
    callCount = callCount + 1;
  }
};
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');