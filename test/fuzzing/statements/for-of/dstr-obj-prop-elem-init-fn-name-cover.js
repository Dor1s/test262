var xCover, cover;
var counter = 0;
for ({ x: xCover = (0, function() {}), x: cover = (function() {}) } of [{}]) {
  assert.notSameValue(xCover.name, 'xCover');
  assert.sameValue(cover.name, 'cover');
  verifyNotEnumerable(cover, 'name');
  verifyNotWritable(cover, 'name');
  verifyConfigurable(cover, 'name');
  counter += 1;
}
assert.sameValue(counter, 1);