var argument, eval;
var counter = 0;
for ([arguments, eval] of [[2, 3]]) {
  assert.sameValue(arguments, 2);
  assert.sameValue(eval, 3);
  counter += 1;
}
assert.sameValue(counter, 1);