assert.throws(TypeError, function() {
  class C {
    static get ['prototype']() {}
  }
});