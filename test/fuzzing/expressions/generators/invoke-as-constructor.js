var g = function*(){};
assert.throws(TypeError, function() {
  var instance = new g();
});