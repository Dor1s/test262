var rest;
assert.throws(TypeError, function() {
  0, {...rest} = undefined
;
});