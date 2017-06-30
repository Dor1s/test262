var f = function*({} = null) {};
assert.throws(TypeError, function() {
  f();
});