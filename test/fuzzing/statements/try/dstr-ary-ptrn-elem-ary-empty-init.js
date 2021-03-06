var initCount = 0;
var iterCount = 0;
var iter = function*() { iterCount += 1; }();
var ranCatch = false;
try {
  throw [];
} catch ([[] = function() { initCount += 1; return iter; }()]) {
  assert.sameValue(initCount, 1);
  assert.sameValue(iterCount, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');