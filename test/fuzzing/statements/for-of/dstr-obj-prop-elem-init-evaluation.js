var flag1 = false;
var flag2 = false;
var x, y;
var counter = 0;
for ({ x: x = flag1 = true, y: y = flag2 = true } of [{ y: 1 }]) {
  assert.sameValue(x, true, 'value of `x`');
  assert.sameValue(flag1, true, 'value of `flag1`');
  assert.sameValue(y, 1, 'value of `y`');
  assert.sameValue(flag2, false, 'value of `flag2`');
  counter += 1;
}
assert.sameValue(counter, 1);