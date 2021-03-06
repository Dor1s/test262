var a, b, c, d, e;
var counter = 0;
for ({a, b, ...{c, e}} of [{a: 1, b: 2, c: 3, d: 4, e: 5}]) {
  assert.sameValue(a, 1);
  assert.sameValue(b, 2);
  assert.sameValue(c, 3);
  assert.sameValue(e, 5);
  assert.sameValue(d, undefined);
  counter += 1;
}
assert.sameValue(counter, 1);