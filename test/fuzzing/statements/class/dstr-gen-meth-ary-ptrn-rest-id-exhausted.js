var callCount = 0;
class C {
  *method([, , ...x]) {
    assert(Array.isArray(x));
    assert.sameValue(x.length, 0);
    callCount = callCount + 1;
  }
};
new C().method([1, 2]).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');