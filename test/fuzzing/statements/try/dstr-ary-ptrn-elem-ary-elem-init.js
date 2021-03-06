var ranCatch = false;
try {
  throw [];
} catch ([[x, y, z] = [4, 5, 6]]) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');