class C {
  static async *method([[x]] = [null]) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method();
});