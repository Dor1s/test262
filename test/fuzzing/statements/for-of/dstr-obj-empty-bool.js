var counter = 0;
for ({} of [false]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);