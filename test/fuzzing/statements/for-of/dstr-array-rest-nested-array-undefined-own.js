var x = null;
var counter = 0;
for ([...[x]] of [[undefined]]) {
  assert.sameValue(x, undefined);
  counter += 1;
}
assert.sameValue(counter, 1);