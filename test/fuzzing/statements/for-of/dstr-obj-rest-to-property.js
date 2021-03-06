var src = {};
var counter = 0;
for ({...src.y} of [{ x: 1, y: 2}]) {
  assert.sameValue(src.y.x, 1);
  assert.sameValue(src.y.y, 2);
  verifyEnumerable(src, "y");
  verifyWritable(src, "y");
  verifyConfigurable(src, "y");
  counter += 1;
}
assert.sameValue(counter, 1);