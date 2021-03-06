var callCount = 0;
function* g() {
  callCount += 1;
};
var iterCount = 0;
for (const [[,] = g()] of [[[]]]) {
  assert.sameValue(callCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');