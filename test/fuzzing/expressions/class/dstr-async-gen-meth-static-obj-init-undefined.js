var C = class {
  static async *method({}) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method(undefined);
});