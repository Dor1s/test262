var iterCount = 0;
var x;
for ((x) in { attr: null }) {
  assert.sameValue(x, 'attr');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);