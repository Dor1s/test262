var argument, eval;
var counter = 0;
for ([arguments = 4, eval = 5] of [[]]) {
  assert.sameValue(arguments, 4);
  assert.sameValue(eval, 5);
  counter += 1;
}
assert.sameValue(counter, 1);