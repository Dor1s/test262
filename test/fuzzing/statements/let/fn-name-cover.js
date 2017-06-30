let xCover = (0, function() {});
let cover = (function() {});
assert(xCover.name !== 'xCover');
assert.sameValue(cover.name, 'cover');
verifyNotEnumerable(cover, 'name');
verifyNotWritable(cover, 'name');
verifyConfigurable(cover, 'name');