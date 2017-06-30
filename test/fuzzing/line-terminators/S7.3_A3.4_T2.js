assert.throws(SyntaxError, function() {
  eval("//\u2029 single line comment");
});