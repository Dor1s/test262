var ranCatch = false;
try {
  throw [1, 2];
} catch ([, , ...x]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');