assert.throws(SyntaxError, function() {
  eval("//\u000A single line comment");
});