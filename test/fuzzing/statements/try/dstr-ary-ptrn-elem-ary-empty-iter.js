var initCount = 0;
var ranCatch = false;
try {
  throw [[23]];
} catch ([[] = function() { initCount += 1; }()]) {
  assert.sameValue(initCount, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');