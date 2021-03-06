var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var iterCount = 0;
for (const [] of [iter]) {
  assert.sameValue(iterations, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');