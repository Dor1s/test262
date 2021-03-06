var ranCatch = false;
try {
  throw [1, 2, 3];
} catch ([x, y, z]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 3);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');