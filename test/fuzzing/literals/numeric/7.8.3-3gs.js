var a;
assert.throws(SyntaxError, function() {
  eval("a = 0x1;a = 01;");
});