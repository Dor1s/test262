var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var [] = iter;
assert.sameValue(iterations, 0);