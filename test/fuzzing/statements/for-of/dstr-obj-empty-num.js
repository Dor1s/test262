var counter = 0;
for ({} of [0]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);