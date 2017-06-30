var ranCatch = false;
try {
  throw [,];
} catch ([x = 23]) {
  assert.sameValue(x, 23);
  // another statement
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');