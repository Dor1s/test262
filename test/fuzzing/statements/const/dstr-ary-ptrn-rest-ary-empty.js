var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
const [...[]] = iter;
assert.sameValue(iterations, 1);