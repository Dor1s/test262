assert.throws(TypeError, function() {
  for (let [{ x }] of [[]]) {
    return;
  }
});