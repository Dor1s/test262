var count = 0;
var callCount = 0;
function* f({...x}) {
  assert.sameValue(x.v, 2);
  assert.sameValue(count, 1);
  verifyEnumerable(x, "v");
  verifyWritable(x, "v");
  verifyConfigurable(x, "v");
  callCount = callCount + 1;
};
f({ get v() { count++; return 2; } }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');