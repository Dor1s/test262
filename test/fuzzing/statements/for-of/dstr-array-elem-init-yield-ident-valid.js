var yield = 4;
var x;
var counter = 0;
for ([ x = yield ] of [[]]) {
  assert.sameValue(x, 4);
  counter += 1;
}
assert.sameValue(counter, 1);