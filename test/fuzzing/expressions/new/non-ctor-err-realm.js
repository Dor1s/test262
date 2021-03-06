var otherParseInt = $262.createRealm().global.parseInt;
assert.sameValue(typeof otherParseInt, 'function');
assert.throws(TypeError, function() {
  new otherParseInt(0);
}, 'production including Arguments');
assert.throws(TypeError, function() {
  new otherParseInt;
}, 'production eliding Arguments');