var x = 0;
var a, b;
var counter = 0;
for ([ a = x += 1, b = x *= 2 ] of [[]]) {
  assert.sameValue(a, 1);
  assert.sameValue(b, 2);
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);