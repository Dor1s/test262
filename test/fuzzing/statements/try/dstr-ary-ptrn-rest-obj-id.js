var ranCatch = false;
try {
  throw [1, 2, 3];
} catch ([...{ length }]) {
  assert.sameValue(length, 3);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');