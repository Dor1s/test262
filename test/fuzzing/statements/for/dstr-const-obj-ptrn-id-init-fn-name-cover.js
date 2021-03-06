var iterCount = 0;
for (const { cover = (function () {}), xCover = (0, function() {})  } = {}; iterCount < 1; ) {
  assert.sameValue(cover.name, 'cover');
  assert.notSameValue(xCover.name, 'xCover');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');