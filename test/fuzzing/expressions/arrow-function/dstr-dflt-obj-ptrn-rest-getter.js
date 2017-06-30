var count = 0;
var callCount = 0;
var f;
f = ({...x} = { get v() { count++; return 2; } }) => {
  assert.sameValue(x.v, 2);
  assert.sameValue(count, 1);
  verifyEnumerable(x, "v");
  verifyWritable(x, "v");
  verifyConfigurable(x, "v");
  callCount = callCount + 1;
};
f();
assert.sameValue(callCount, 1, 'arrow function invoked exactly once');