var prop;
var counter = 0;
for ({ prop = 'x' in {} } of [{}]) {
  assert.sameValue(prop, false);
  counter += 1;
}
assert.sameValue(counter, 1);