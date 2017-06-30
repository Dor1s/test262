var f = ({}) => {};
assert.throws(TypeError, function() {
  f(undefined);
});