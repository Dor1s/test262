var x = {};
var counter = 0;
for ({ xy: x.y } of [{ xy: 4 }]) {
  assert.sameValue(x.y, 4);
  counter += 1;
}
assert.sameValue(counter, 1);