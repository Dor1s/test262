var ranCatch = false;
try {
  throw [3, 4, 5];
} catch ([...[x, y, z]]) {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');