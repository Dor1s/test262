class C {
  static async *method({} = undefined) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method();
});