var x;
assert.throws(SyntaxError, function() {
  eval("x = 1; x\u000A++");
});