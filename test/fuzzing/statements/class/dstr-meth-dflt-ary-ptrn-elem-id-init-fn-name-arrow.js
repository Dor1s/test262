var callCount = 0;
class C {
  method([arrow = () => {}] = []) {
    assert.sameValue(arrow.name, 'arrow');
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');