assert.throws(ReferenceError, function() {
  eval("var x = asdf\u2029ghjk");
});