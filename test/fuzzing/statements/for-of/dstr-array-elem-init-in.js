var x;
var counter = 0;
for ([ x = 'x' in {} ] of [[]]) {
  assert.sameValue(x, false);
  counter += 1;
}
assert.sameValue(counter, 1);