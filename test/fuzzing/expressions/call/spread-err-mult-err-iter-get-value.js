var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    return null;
  }
});
assert.throws(TypeError, function() {
  (function() {}(0, ...iter));
});