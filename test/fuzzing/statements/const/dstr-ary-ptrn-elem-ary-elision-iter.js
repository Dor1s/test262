var callCount = 0;
function* g() {
  callCount += 1;
};
const [[,] = g()] = [[]];
assert.sameValue(callCount, 0);