var ranCatch = false;
try {
  throw [];
} catch ([x]) {
  assert.sameValue(x, undefined);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');