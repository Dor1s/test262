var counter = 0;
for ([,] of ['string literal']) {
  
  counter += 1;
}
assert.sameValue(counter, 1);