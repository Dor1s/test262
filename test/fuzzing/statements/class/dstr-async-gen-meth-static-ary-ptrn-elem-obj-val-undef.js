class C {
  static async *method([{ x }]) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method([]);
});