var values = [2, 1, 3];
var initCount = 0;
var ranCatch = false;
try {
  throw [values];
} catch ([[...x] = function() { initCount += 1; }()]) {
  assert(Array.isArray(x));
  assert.sameValue(x[0], 2);
  assert.sameValue(x[1], 1);
  assert.sameValue(x[2], 3);
  assert.sameValue(x.length, 3);
  assert.notSameValue(x, values);
  assert.sameValue(initCount, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');