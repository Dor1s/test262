var x = null;
var w;
var counter = 0;
for ({ w, a: x } of [{ a: 4 }]) {
  assert.sameValue(x, 4);
  counter += 1;
}
assert.sameValue(counter, 1);