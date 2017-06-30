assert.throws(SyntaxError, function() {
  eval("'\u000Astr\u000Aing\u000A'");
});