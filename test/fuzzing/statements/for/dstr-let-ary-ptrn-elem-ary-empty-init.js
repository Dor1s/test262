var initCount = 0;
var iterCount = 0;
var iter = function*() { iterCount += 1; }();
var iterCount = 0;
for (let [[] = function() { initCount += 1; return iter; }()] = []; iterCount < 1; ) {
  assert.sameValue(initCount, 1);
  assert.sameValue(iterCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');