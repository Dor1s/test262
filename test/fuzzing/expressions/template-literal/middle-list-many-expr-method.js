var object = {
  fn: function() { return 'result'; }
};
assert.sameValue(`${0} ${1} ${object.fn()} bar`, '0 1 result bar');