var ranCatch = false;
try {
  throw [undefined];
} catch ([x = 23]) {
  assert.sameValue(x, 23);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');