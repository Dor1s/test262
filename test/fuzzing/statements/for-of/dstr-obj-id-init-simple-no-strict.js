var eval, arguments;
var counter = 0;
for ({ eval = 3, arguments = 4 } of [{}]) {
  assert.sameValue(eval, 3);
  assert.sameValue(arguments, 4);
  counter += 1;
}
assert.sameValue(counter, 1);