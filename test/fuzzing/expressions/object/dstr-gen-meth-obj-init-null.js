var obj = {
  *method({}) {}
};
assert.throws(TypeError, function() {
  obj.method(null);
});