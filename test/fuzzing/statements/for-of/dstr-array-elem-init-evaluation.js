var flag1 = false, flag2 = false;
var _;
var counter = 0;
for ([ _ = flag1 = true, _ = flag2 = true ] of [[14]]) {
  assert.sameValue(flag1, false);
  assert.sameValue(flag2, true);
  counter += 1;
}
assert.sameValue(counter, 1);