var x;
assert.throws(SyntaxError, function() {
  (0,eval)("x = 1; x\u000A++");
});