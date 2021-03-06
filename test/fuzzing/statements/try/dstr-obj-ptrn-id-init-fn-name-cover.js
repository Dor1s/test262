var ranCatch = false;
try {
  throw {};
} catch ({ cover = (function () {}), xCover = (0, function() {})  }) {
  assert.sameValue(cover.name, 'cover');
  assert.notSameValue(xCover.name, 'xCover');
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');