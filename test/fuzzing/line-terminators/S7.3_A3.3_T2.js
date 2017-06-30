assert.throws(SyntaxError, function() {
  eval("//\u2028 single line comment");
});