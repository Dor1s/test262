var obj = {
  method([[x]] = [null]) {}
};
assert.throws(TypeError, function() {
  obj.method();
});