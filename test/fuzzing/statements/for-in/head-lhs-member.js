var iterCount = 0;
var x = {};
for (x.y in { attr: null }) {
  assert.sameValue(x.y, 'attr');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);