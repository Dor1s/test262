const c = null;
assert.throws(TypeError, function() {
  0, [ ...c ] = [1];
});