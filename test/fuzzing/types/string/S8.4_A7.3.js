assert.throws(ReferenceError, function() {
  eval("var x = asdf\u2028ghjk");
});