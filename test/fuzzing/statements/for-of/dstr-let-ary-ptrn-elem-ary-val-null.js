assert.throws(TypeError, function() {
  for (let [[x]] of [[null]]) {
    return;
  }
});