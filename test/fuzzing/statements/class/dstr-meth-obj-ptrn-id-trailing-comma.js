var callCount = 0;
class C {
  method({ x, }) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }
};
new C().method({ x: 23 });
assert.sameValue(callCount, 1, 'method invoked exactly once');