var ranCatch = false;
try {
  throw [];
} catch ([x = 23]) {
  assert.sameValue(x, 23);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');