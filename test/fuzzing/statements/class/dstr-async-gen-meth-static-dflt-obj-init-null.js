class C {
  static async *method({} = null) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method();
});