var obj = {
  method([[x]]) {}
};
assert.throws(TypeError, function() {
  obj.method([null]);
});