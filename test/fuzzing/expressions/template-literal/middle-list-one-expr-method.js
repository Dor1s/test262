var object = {
  fn: function() { return 'result'; }
};
assert.sameValue(`${0} ${object.fn()} bar`, '0 result bar');