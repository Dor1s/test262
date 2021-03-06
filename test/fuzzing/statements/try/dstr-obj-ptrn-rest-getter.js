var count = 0;
var ranCatch = false;
try {
  throw { get v() { count++; return 2; } };
} catch ({...x}) {
  assert.sameValue(x.v, 2);
  assert.sameValue(count, 1);
  verifyEnumerable(x, "v");
  verifyWritable(x, "v");
  verifyConfigurable(x, "v");
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');