var iterCount = 0;
for (var x in { attr: null }) {
  var x;
  assert.sameValue(x, 'attr');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);