var object = {
  fn: function() { return 'result'; }
};
assert.sameValue(`foo ${object.fn()} bar`, 'foo result bar');