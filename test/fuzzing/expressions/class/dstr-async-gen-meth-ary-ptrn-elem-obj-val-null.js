var C = class {
  async *method([{ x }]) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method([null]);
});