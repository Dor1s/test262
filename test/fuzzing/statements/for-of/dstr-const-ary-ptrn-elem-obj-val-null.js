assert.throws(TypeError, function() {
  for (const [{ x }] of [[null]]) {
    return;
  }
});