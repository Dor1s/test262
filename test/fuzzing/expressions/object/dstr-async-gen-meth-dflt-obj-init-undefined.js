var obj = {
  async *method({} = undefined) {
    
  }
};
assert.throws(TypeError, function() {
  obj.method();
});