var callCount = 0;
class C {
  *method({ x: [y], }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
new C().method({ x: [45] }).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');