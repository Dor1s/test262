var iterCount = 0;
for (var [x, x] in { ab: null }) {
  assert.sameValue(x, 'b');
  iterCount += 1;
}
assert.sameValue(iterCount, 1);