assert.throws(SyntaxError, function() {
  eval("var\u180Efoo;");
});