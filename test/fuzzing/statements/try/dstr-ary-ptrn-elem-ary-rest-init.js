var values = [2, 1, 3];
var ranCatch = false;
try {
  throw [];
} catch ([[...x] = values]) {
  assert(Array.isArray(x));
  assert.sameValue(x[0], 2);
  assert.sameValue(x[1], 1);
  assert.sameValue(x[2], 3);
  assert.sameValue(x.length, 3);
  assert.notSameValue(x, values);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');