var iterCount = 0;
for (var [x, x] of [[1, 2]]) {
  assert.sameValue(x, 2);
  iterCount += 1;
}
assert.sameValue(iterCount, 1);