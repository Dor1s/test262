var iterCount = 0;
for (var [cover = (function () {}), xCover = (0, function() {})] of [[]]) {
  assert.sameValue(cover.name, 'cover');
  assert.notSameValue(xCover.name, 'xCover');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');