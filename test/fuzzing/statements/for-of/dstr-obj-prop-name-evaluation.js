var x, y, xy;
var counter = 0;
for ({ ['x' + 'y']: x } of [{ x: 1, xy: 23, y: 2 }]) {
  assert.sameValue(x, 23);
  assert.sameValue(y, undefined);
  assert.sameValue(xy, undefined);
  counter += 1;
}
assert.sameValue(counter, 1);