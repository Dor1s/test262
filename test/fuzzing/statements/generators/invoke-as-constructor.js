function* g(){}
assert.throws(TypeError, function() {
  var instance = new g();
});