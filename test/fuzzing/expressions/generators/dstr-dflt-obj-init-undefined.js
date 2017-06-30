var f = function*({} = undefined) {};
assert.throws(TypeError, function() {
  f();
});