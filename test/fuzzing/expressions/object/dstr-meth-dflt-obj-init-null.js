var obj = {
  method({} = null) {}
};
assert.throws(TypeError, function() {
  obj.method();
});