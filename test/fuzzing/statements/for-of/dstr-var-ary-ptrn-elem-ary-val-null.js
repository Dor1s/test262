assert.throws(TypeError, function() {
  for (var [[x]] of [[null]]) {
    return;
  }
});