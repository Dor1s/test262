var obj = {
  async *method([{ x }]) {
    
  }
};
assert.throws(TypeError, function() {
  obj.method([]);
});