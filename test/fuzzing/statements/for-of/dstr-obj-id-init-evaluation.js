var flag1 = false;
var flag2 = false;
var x, y;
var counter = 0;
for ({ x = flag1 = true, y = flag2 = true } of [{ y: 1 }]) {
  assert.sameValue(flag1, true);
  assert.sameValue(flag2, false);
  counter += 1;
}
assert.sameValue(counter, 1);