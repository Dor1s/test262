var obj = {
  async *method({} = null) {
    
  }
};
assert.throws(TypeError, function() {
  obj.method();
});