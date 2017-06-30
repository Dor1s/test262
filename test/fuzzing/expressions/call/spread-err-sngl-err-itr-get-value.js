var iter = {};
iter[Symbol.iterator] = function() {
  return null;
};
assert.throws(TypeError, function() {
  (function() {}(...iter));
});