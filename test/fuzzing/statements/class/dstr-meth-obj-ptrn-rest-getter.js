var count = 0;
var callCount = 0;
class C {
  method({...x}) {
    assert.sameValue(x.v, 2);
    assert.sameValue(count, 1);
    verifyEnumerable(x, "v");
    verifyWritable(x, "v");
    verifyConfigurable(x, "v");
    callCount = callCount + 1;
  }
};
new C().method({ get v() { count++; return 2; } });
assert.sameValue(callCount, 1, 'method invoked exactly once');