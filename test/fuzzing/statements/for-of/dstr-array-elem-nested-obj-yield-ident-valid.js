var yield = 2;
var x;
var counter = 0;
for ([{ x = yield }] of [[{}]]) {
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);