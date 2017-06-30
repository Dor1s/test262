var yield = 'prop';
var x = {};
var counter = 0;
for ([...x[yield]] of [[33, 44, 55]]) {
  assert.sameValue(x.prop.length, 3);
  assert.sameValue(x.prop[0], 33);
  assert.sameValue(x.prop[1], 44);
  assert.sameValue(x.prop[2], 55);
  counter += 1;
}
assert.sameValue(counter, 1);