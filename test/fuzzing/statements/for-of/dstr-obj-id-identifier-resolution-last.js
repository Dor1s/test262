var x = null;
var w;
var counter = 0;
for ({ w, x } of [{ x: 4 }]) {
  assert.sameValue(x, 4);
  counter += 1;
}
assert.sameValue(counter, 1);