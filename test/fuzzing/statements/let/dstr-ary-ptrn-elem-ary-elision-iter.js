var callCount = 0;
function* g() {
  callCount += 1;
};
let [[,] = g()] = [[]];
assert.sameValue(callCount, 0);