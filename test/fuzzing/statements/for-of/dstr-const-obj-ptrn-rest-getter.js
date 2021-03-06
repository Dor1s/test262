var count = 0;
var iterCount = 0;
for (const {...x} of [{ get v() { count++; return 2; } }]) {
  assert.sameValue(x.v, 2);
  assert.sameValue(count, 1);
  verifyEnumerable(x, "v");
  verifyWritable(x, "v");
  verifyConfigurable(x, "v");
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');