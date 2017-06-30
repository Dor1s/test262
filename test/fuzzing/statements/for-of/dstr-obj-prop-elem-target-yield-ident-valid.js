var yield = 'prop';
var x = {};
var counter = 0;
for ({ x: x[yield] } of [{ x: 23 }]) {
  assert.sameValue(x.prop, 23);
  counter += 1;
}
assert.sameValue(counter, 1);