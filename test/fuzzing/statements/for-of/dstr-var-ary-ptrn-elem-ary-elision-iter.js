var callCount = 0;
function* g() {
  callCount += 1;
};
var iterCount = 0;
for (var [[,] = g()] of [[[]]]) {
  assert.sameValue(callCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');