assert.throws(TypeError, function() {
  for (const [{ x }] of [[]]) {
    return;
  }
});