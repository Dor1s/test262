assert.throws(TypeError, function() {
  for (var [{ x }] of [[]]) {
    return;
  }
});