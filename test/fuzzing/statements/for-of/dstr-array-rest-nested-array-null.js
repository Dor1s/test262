var x, y;
var counter = 0;
for ([...[x, y]] of [[null]]) {
  assert.sameValue(x, null);
  assert.sameValue(y, undefined);
  counter += 1;
}
assert.sameValue(counter, 1);