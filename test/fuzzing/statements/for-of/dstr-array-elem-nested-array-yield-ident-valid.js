var yield = 'prop';
var x = {};
var counter = 0;
for ([[x[yield]]] of [[[22]]]) {
  assert.sameValue(x.prop, 22);
  counter += 1;
}
assert.sameValue(counter, 1);