var callCount = 0;
function* g() {
  callCount += 1;
};
var ranCatch = false;
try {
  throw [[]];
} catch ([[,] = g()]) {
  assert.sameValue(callCount, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');