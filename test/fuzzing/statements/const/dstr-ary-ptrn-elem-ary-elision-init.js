var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
const [[,] = g()] = [];
assert.sameValue(first, 1);
assert.sameValue(second, 0);