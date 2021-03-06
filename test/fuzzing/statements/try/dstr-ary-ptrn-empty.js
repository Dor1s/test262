var iterations = 0;
var iter = function*() {
  iterations += 1;
}();
var ranCatch = false;
try {
  throw iter;
} catch ([]) {
  assert.sameValue(iterations, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');