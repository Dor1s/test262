const rest = null;
assert.throws(TypeError, function() {
  0, {...rest} = {}
;
});