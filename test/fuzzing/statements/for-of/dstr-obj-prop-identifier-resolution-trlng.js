var x = null;
var counter = 0;
for ({ a: x, } of [{ a: 2 }]) {
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);