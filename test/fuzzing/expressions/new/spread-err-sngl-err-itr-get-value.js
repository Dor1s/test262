var iter = {};
iter[Symbol.iterator] = function() {
  return null;
};
assert.throws(TypeError, function() {
  new function() {}(...iter);
});