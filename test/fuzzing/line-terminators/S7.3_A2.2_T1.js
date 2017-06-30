assert.throws(SyntaxError, function() {
  eval("'\u000Dstr\u000Ding\u000D'");
});