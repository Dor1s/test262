var x = null;
var w, y;
var counter = 0;
for ({ w, x, y } of [{ x: 5 }]) {
  assert.sameValue(x, 5);
  counter += 1;
}
assert.sameValue(counter, 1);