var obj = {
  *method({} = undefined) {}
};
assert.throws(TypeError, function() {
  obj.method();
});