var obj = {
  async *method([[x]] = [null]) {
    
  }
};
assert.throws(TypeError, function() {
  obj.method();
});