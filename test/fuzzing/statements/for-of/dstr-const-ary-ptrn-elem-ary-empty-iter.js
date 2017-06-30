var initCount = 0;
var iterCount = 0;
for (const [[] = function() { initCount += 1; }()] of [[[23]]]) {
  assert.sameValue(initCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');