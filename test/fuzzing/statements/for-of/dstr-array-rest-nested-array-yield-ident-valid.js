var yield = 'prop';
var x = {};
var counter = 0;
for ([...[x[yield]]] of [[86]]) {
  assert.sameValue(x.prop, 86);
  counter += 1;
}
assert.sameValue(counter, 1);