var x = null;
var y;
var counter = 0;
for ({ a: x, y } of [{ a: 3 }]) {
  assert.sameValue(x, 3);
  counter += 1;
}
assert.sameValue(counter, 1);