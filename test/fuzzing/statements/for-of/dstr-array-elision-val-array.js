var counter = 0;
for ([,] of [[]]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);