assert.throws(TypeError, function() {
  class C { static set ['prototype'](_) {} }
});