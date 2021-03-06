var count = 0;
var iterCount = 0;
for (var {...x} = { get v() { count++; return 2; } }; iterCount < 1; ) {
  assert.sameValue(x.v, 2);
  assert.sameValue(count, 1);
  verifyEnumerable(x, "v");
  verifyWritable(x, "v");
  verifyConfigurable(x, "v");
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');