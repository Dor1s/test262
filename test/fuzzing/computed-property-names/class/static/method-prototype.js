assert.throws(TypeError, function() {
  class C {
    static ['prototype']() {}
  }
});