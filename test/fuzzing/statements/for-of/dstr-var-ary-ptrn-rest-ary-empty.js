var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var iterCount = 0;
for (var [...[]] of [iter]) {
  assert.sameValue(iterations, 1);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');