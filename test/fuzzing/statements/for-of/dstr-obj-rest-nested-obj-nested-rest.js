var a, b, c, rest;
var counter = 0;
for ({a, b, ...{c, ...rest}} of [{a: 1, b: 2, c: 3, d: 4, e: 5}]) {
  assert.sameValue(a, 1);
  assert.sameValue(b, 2);
  assert.sameValue(c, 3);
  assert.sameValue(rest.d, 4);
  assert.sameValue(rest.e, 5);
  verifyEnumerable(rest, "d");
  verifyWritable(rest, "d");
  verifyConfigurable(rest, "d");
  verifyEnumerable(rest, "e");
  verifyWritable(rest, "e");
  verifyConfigurable(rest, "e");
  counter += 1;
}
assert.sameValue(counter, 1);