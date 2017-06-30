assert.throws(SyntaxError, function() {
  eval("var x = 1; x\u000D--");
});