eval("var x = 7;");
assert.throws(ReferenceError, function() {
  x = 9;
});