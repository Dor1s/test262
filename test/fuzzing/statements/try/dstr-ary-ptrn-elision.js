var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};
var ranCatch = false;
try {
  throw g();
} catch ([,]) {
  assert.sameValue(first, 1);
  assert.sameValue(second, 0);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');