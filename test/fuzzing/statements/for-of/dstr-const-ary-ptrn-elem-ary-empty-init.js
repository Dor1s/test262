var initCount = 0;
var iterCount = 0;
var iter = function*() { iterCount += 1; }();
var iterCount = 0;
for (const [[] = function() { initCount += 1; return iter; }()] of [[]]) {
  assert.sameValue(initCount, 1);
  assert.sameValue(iterCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');