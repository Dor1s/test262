var obj = { method() {} };
assert.throws(TypeError, function() {
  new obj.method();
});