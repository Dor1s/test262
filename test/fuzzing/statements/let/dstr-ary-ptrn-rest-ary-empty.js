var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
let [...[]] = iter;
assert.sameValue(iterations, 1);