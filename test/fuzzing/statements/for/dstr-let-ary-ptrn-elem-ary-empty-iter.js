var initCount = 0;
var iterCount = 0;
for (let [[] = function() { initCount += 1; }()] = [[23]]; iterCount < 1; ) {
  assert.sameValue(initCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');