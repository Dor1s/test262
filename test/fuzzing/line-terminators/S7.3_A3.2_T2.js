assert.throws(SyntaxError, function() {
  eval("//\u000D single line comment");
});