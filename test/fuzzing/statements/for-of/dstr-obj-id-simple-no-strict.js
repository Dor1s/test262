var eval, arguments;
var counter = 0;
for ({ eval, arguments } of [{ eval: 1, arguments: 2 }]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);
assert.sameValue(eval, 1);
assert.sameValue(arguments, 2);