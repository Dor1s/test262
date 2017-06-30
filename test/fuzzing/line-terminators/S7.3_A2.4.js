assert.throws(SyntaxError, function() {
  eval("'\u2029str\u2029ing\u2029'");
});