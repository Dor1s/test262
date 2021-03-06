var ranCatch = false;
try {
  throw [[7, 8, 9]];
} catch ([[x, y, z] = [4, 5, 6]]) {
  assert.sameValue(x, 7);
  assert.sameValue(y, 8);
  assert.sameValue(z, 9);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');