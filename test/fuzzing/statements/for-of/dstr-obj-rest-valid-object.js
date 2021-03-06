var rest, a, b;
var counter = 0;
for ({a, b, ...rest} of [{x: 1, y: 2, a: 5, b: 3}]) {
  assert.sameValue(rest.x, 1);
  assert.sameValue(rest.y, 2);
  assert.sameValue(rest.a, undefined);
  assert.sameValue(rest.b, undefined);
  verifyEnumerable(rest, "x");
  verifyWritable(rest, "x");
  verifyConfigurable(rest, "x");
  verifyEnumerable(rest, "y");
  verifyWritable(rest, "y");
  verifyConfigurable(rest, "y");
  counter += 1;
}
assert.sameValue(counter, 1);