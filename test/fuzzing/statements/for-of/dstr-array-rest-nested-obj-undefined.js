var x = null;
let length;
var counter = 0;
for ([...{ 0: x, length }] of [[]]) {
  assert.sameValue(x, undefined);
  assert.sameValue(length, 0);
  counter += 1;
}
assert.sameValue(counter, 1);