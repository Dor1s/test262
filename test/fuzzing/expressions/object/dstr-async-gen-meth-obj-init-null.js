var obj = {
  async *method({}) {
    
  }
};
assert.throws(TypeError, function() {
  obj.method(null);
});